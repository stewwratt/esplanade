/* eslint-disable operator-linebreak */
/* eslint-disable no-useless-escape */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const functions = require("firebase-functions");
const OpenAI = require("openai");
const getBookingAvailabilities = require("./getBookingAvailabilities");
global.getBookingAvailabilities = getBookingAvailabilities;

const { google } = require("googleapis");
const pdfParse = require("pdf-parse");
const streamToBuffer = require("stream-to-buffer");
const { Readable } = require("stream");
const { DateTime } = require("luxon");

const threadConversationFolderId = "1HJBuQ-bPKk8ITLEapxy_LBkDObtHqox8";

const serviceAccount = {
  type: functions.config().service_account.type,
  project_id: functions.config().service_account.project_id,
  private_key_id: functions.config().service_account.private_key_id,
  private_key: functions
    .config()
    .service_account.private_key.replace(/\\n/g, "\n"),
  client_email: functions.config().service_account.client_email,
  client_id: functions.config().service_account.client_id,
  auth_uri: functions.config().service_account.auth_uri,
  token_uri: functions.config().service_account.token_uri,
  auth_provider_x509_cert_url:
    functions.config().service_account.auth_provider_x509_cert_url,
  client_x509_cert_url: functions.config().service_account.client_x509_cert_url,
};

const admin = require("firebase-admin");
const { Console } = require("console");

// Initialize Firebase Admin with the service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get the Firestore instance
const db = admin.firestore();

const corsOptions = {
  origin: [
    "https://esplanade.ai",
    "https://www.esplanade.ai",
    "http://localhost:8080",
    "http://127.0.0.1:8080",
  ],
  optionsSuccessStatus: 200,
};
const cors = require("cors")(corsOptions);

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: "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",
});

// Get user details based on given threadId from firebase records
async function getUserDetails(threadId) {
  try {
    const contactsRef = db.collection("contacts");
    const snapshot = await contactsRef.where("threadId", "==", threadId).get();

    if (snapshot.empty) {
      console.log("No matching documents.");
      return null;
    }

    let userDetails = {};
    snapshot.forEach((doc) => {
      userDetails = doc.data(); // Assuming there's only one document per threadId
    });

    console.log("User details:", userDetails);
    return userDetails;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return null;
  }
}

// Function to append user details to Calendly link
function appendUserDetailsToCalendlyLink(calendlyLink, userDetails) {
  const { fullname, email } = userDetails;
  const params = new URLSearchParams();
  if (fullname) params.append("full_name", fullname);
  // if (lastName) params.append("last_name", lastName);
  if (email) params.append("email", email);
  return `${calendlyLink}?${params.toString()}`;
}

// Function to start a new thread
exports.startNewThread = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Create a new thread
      const thread = await openai.beta.threads.create();
      // eslint-disable-next-line object-curly-spacing
      res.json({ threadId: thread.id });
    } catch (error) {
      console.error("Error creating new thread:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

// // Function to send a message to a thread
// exports.sendMessageToThread = functions.https.onRequest(async (req, res) => {
//   cors(req, res, async () => {
//     if (req.method !== "POST") {
//       return res.status(405).send("Method Not Allowed");
//     }

//     const { threadId, message } = req.body;

//     try {
//       // Add the user's message to the thread
//       await openai.beta.threads.messages.create(threadId, {
//         role: "user",
//         content: message,
//       });

//       // Run the assistant on the thread
//       const run = await openai.beta.threads.runs.create(threadId, {
//         assistant_id: "asst_vv8L7rDpRxapNxWzo6vXTbui",
//       });

//       res.json({ runId: run.id });
//     } catch (error) {
//       console.error("Error sending message to thread:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });
// });

// Helper function to send message to OpenAI and create run
async function sendMessageAndCreateRun(threadId, message) {
  try {
    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message,
    });

    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: "asst_vv8L7rDpRxapNxWzo6vXTbui",
    });

    return run.id;
  } catch (error) {
    console.error("Error in sendMessageAndCreateRun:", error);
    throw new Error("Failed to send message or create run");
  }
}

// Function to send a message to a thread
exports.sendMessageToThread = functions
  .runWith({ timeoutSeconds: 120 })
  .https.onRequest(async (req, res) => {
    cors(req, res, async () => {
      if (req.method !== "POST") {
        console.log("Invalid request method:", req.method);
        return res.status(405).send("Method Not Allowed");
      }

      const { threadId, message } = req.body;
      console.log(`Received message for thread: ${threadId}`, message);

      try {
        console.log("Adding user's message to the thread...");
        await openai.beta.threads.messages.create(threadId, {
          role: "user",
          content: message,
        });

        console.log("Running the assistant on the thread...");
        const run = await openai.beta.threads.runs.create(threadId, {
          assistant_id: "asst_vv8L7rDpRxapNxWzo6vXTbui",
        });

        console.log("Message sent, responding with runId:", run.id);
        res.json({ runId: run.id });
      } catch (error) {
        console.error("Error sending message to thread:", error);
        res.status(500).send("Internal Server Error");
      }
    });
  });

// Utility function to truncate a string to a specified max length
function truncateString(str, maxLength = 19984) {
  return str.length > maxLength
    ? str.slice(0, maxLength) + "...(truncated)"
    : str;
}

// Function to serialize and truncate tool outputs if necessary
function serializeAndTruncateToolOutputs(toolOutputs) {
  let serialized = JSON.stringify(toolOutputs);
  if (serialized.length > 20000) {
    console.log(
      `Original toolOutputs size: ${serialized.length}. Truncating...`
    );
    serialized = truncateString(serialized, 19984); // Leaving some space for JSON structure
    console.log(`Truncated toolOutputs size: ${serialized.length}.`);
  }
  return serialized;
}

exports.getAssistantResponse = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    let completed = false;

    if (req.method !== "GET") {
      console.log("Invalid request method:", req.method);
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { threadId, runId } = req.query;
    console.log("Request received for threadId:", threadId, "runId:", runId);

    try {
      while (!completed) {
        const runStatus = await openai.beta.threads.runs.retrieve(
          threadId,
          runId
        );
        console.log(`Run status for ${threadId}, ${runId}:`, runStatus.status);

        if (runStatus.status === "completed") {
          completed = true;
          const messages = await openai.beta.threads.messages.list(threadId);
          const lastMessage = messages.data.find((m) => m.role === "assistant");
          console.log("Replying with last assistant message content.");
          return res.json({ reply: lastMessage.content });
        } else if (runStatus.status === "requires_action") {
          // Handle requires_action status
          console.log("Handling requires_action status...");
          const toolOutputs = handleRequiresAction(runStatus, threadId, runId);
          await submitToolOutputsAndLog(threadId, runId, toolOutputs);
          continue; // Continue polling for completion
        } else {
          console.log("Polling for completion...");
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait before next check
        }
      }
    } catch (error) {
      console.error("Error retrieving assistant response:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

async function handleRequiresAction(runStatus, threadId, runId) {
  const toolCalls = runStatus.required_action.submit_tool_outputs.tool_calls;
  const toolOutputs = [];

  for (const toolCall of toolCalls) {
    const functionName = toolCall.function.name;
    const args = JSON.parse(toolCall.function.arguments);
    console.log(`Executing tool function: ${functionName} with args:`, args);

    try {
      const response = await global[functionName](...Object.values(args));
      console.log(`Response from ${functionName}:`, response);

      const serializedToolOutput = serializeAndTruncateToolOutputs(response);
      toolOutputs.push({
        tool_call_id: toolCall.id,
        output: serializedToolOutput,
      });
    } catch (functionError) {
      console.error(`Error in tool function ${functionName}:`, functionError);
      // Decide how to handle tool function errors. This example logs the error.
    }
  }
  return toolOutputs;
}

async function submitToolOutputsAndLog(threadId, runId, toolOutputs) {
  try {
    await openai.beta.threads.runs.submitToolOutputs(threadId, runId, {
      tool_outputs: toolOutputs,
    });
    console.log("Tool outputs submitted successfully.");
  } catch (submitError) {
    console.error("Error submitting tool outputs:", submitError);
  }
}
// exports.getAssistantResponse = functions.https.onRequest(async (req, res) => {
//   cors(req, res, async () => {
//     let completed = false;

//     if (req.method !== "GET") {
//       return res.status(405).json({ error: "Method Not Allowed" });
//     }

//     const { threadId, runId } = req.query;

//     console.log("THIS IS THE NEW REQ TO GET ASSISTANT RESPONSE", req.query);

//     try {
//       while (!completed) {
//         const runStatus = await openai.beta.threads.runs.retrieve(
//           threadId,
//           runId
//         );
//         if (runStatus.status === "completed") {
//           completed = true;
//           const messages = await openai.beta.threads.messages.list(threadId);
//           const lastMessage = messages.data.find((m) => m.role === "assistant");
//           return res.json({ reply: lastMessage.content });
//         } else if (runStatus.status === "requires_action") {
//           console.log(runStatus.required_action.submit_tool_outputs.tool_calls);
//           const toolCalls =
//             runStatus.required_action.submit_tool_outputs.tool_calls;
//           const toolOutputs = [];

//           for (const toolCall of toolCalls) {
//             const functionName = toolCall.function.name;

//             console.log(
//               `This question requires us to call a function: ${functionName}`
//             );

//             const args = JSON.parse(toolCall.function.arguments);

//             const argsArray = Object.keys(args).map((key) => args[key]);

//             console.log(
//               "Function available:",
//               typeof global[functionName] === "function"
//             );

//             // Dynamically call the function with arguments
//             let response = await global[functionName].apply(null, [args]);

//             console.log("RESPONSE FROM FUNCTION", response);

//             // Assume the response needs truncation before further processing or output
//             // Truncate the response if it's a string; adjust logic if it's an object or other structure
//             if (typeof response === "string") {
//               response = truncateString(response); // Adjust the limit as necessary
//             } else if (response && typeof response === "object") {
//               // If the response is an object with specific fields to truncate, handle those cases here
//               // Example for a field named 'text'
//               if (response.text) {
//                 response.text = truncateString(response.text);
//               }
//             }

//             const userDetails = await getUserDetails(threadId); // Add this line

//             // Convert timestamps to AEST
//             if (userDetails && response.collection) {
//               response.collection.forEach((entry) => {
//                 if (entry.start_time) {
//                   entry.start_time = DateTime.fromISO(entry.start_time, {
//                     zone: "Australia/Sydney",
//                   }).toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS); // Use your desired format here
//                 }
//                 // Check and modify Calendly links
//                 if (entry.scheduling_url) {
//                   entry.scheduling_url = appendUserDetailsToCalendlyLink(
//                     entry.scheduling_url,
//                     userDetails
//                   );
//                 }
//               });
//             }

//             toolOutputs.push({
//               tool_call_id: toolCall.id,
//               output: JSON.stringify(response),
//             });
//           }
//           // Submit tool outputs
//           await openai.beta.threads.runs.submitToolOutputs(threadId, runId, {
//             tool_outputs: toolOutputs,
//           });
//           continue; // Continue polling for the final response
//         } else {
//           // Wait for a short period before checking the status again
//           await new Promise((resolve) => setTimeout(resolve, 2000));
//         }
//       }
//     } catch (error) {
//       console.error("Error retrieving assistant response:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
// });

/** TESTING THIS STUFF - PDF PARSER AS A CLOUD FUNCTION */

// Function to get authorized Google API client
async function authorize() {
  // Assuming you have set up authentication as per Google Cloud guidelines
  // https://cloud.google.com/docs/authentication/getting-started
  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  return await auth.getClient();
}

// Function to create a .txt file in Google Drive
// async function createTextFileInDrive(text, folderId, authClient) {
//   const drive = google.drive({ version: "v3", auth: authClient });
//   const fileMetadata = {
//     name: "ExtractedText.txt",
//     mimeType: "text/plain",
//     parents: [folderId],
//   };
//   const media = {
//     mimeType: "text/plain",
//     body: text,
//   };

//   const file = await drive.files.create({
//     resource: fileMetadata,
//     media: media,
//     fields: "id",
//   });

//   return file.data.id;
// }

// Function to extract text from PDF stream
// async function extractTextFromPDF(pdfStream) {
//   return new Promise((resolve, reject) => {
//     streamToBuffer(pdfStream, async (err, buffer) => {
//       if (err) {
//         return reject(err);
//       }

//       try {
//         const data = await pdfParse(buffer);
//         resolve(data.text);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   });
// }

// Function to extract text and remove redundant text using regex
// async function extractAndRemoveRedundantText(pdfStream) {
//   const rawData = await extractTextFromPDF(pdfStream);

//   // Updated regex patterns
//   const redundantTextPatterns = [
//     /COPYRIGHT©.*?\n/g,
//     /\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\n/g, // Existing pattern for removing a sequence of numbers
//     /GENERAL NOTES:.*?\n/g,
//     /FABRICATION\s*(.*?)(?=\ITEM \d+)/gs,
//     /DRAWN BY:.*?(?=ITEM \d+)/gs,
//     /PROJECT:.*?THIRD ANGLE PROJECTION/gs,
//     /CONFIDENTIAL\s+-\s+FOR INTERNAL USE ONLY.*?\n/gs,
//     /THIS DRAWING IS A CONTROLLED DOCUMENT.*?\n/gs,
//     /\b\d{1,2}\.\d{1,2}\.\d{1,2}\b/g,
//     // New patterns
//     /MMD MINING \/ COSMOS NICKEL OPERATIONS.*?FLATNESS\s+± \d+\.\d+mm/gs,
//     /GENERAL TOLERANCING: UNLESS OTHERWISE NOTED.*?N\s+$/gs,
//     /FABRICATIONPRECISION MACHINING.*?FINISH\s+\d+\.\d+ μm/gs, // Pattern to remove fabrication precision machining details
//     /\b\d+\s*\w*\s*=\s*\d+\s*kg/g, // Pattern to remove mass calculations or similar entries
//     /1\. ALL DIMENSIONS ARE FINAL SIZE\.\s*2\. QA INSPECTION OF ALL ITEMS REQUIRED TO BE CONDUCTED ON RECEIPT\.\s*3\. ALL DIMENSIONS ON THE DRAWING ARE TO BE INSPECTED DURING FABRICATION PROCESS AND RECORDED\.\s*4\. ALL MACHINING TO BE CONDUCTED AFTER ALL WELDING AND THE NDT HAS BEEN COMPLETED\.\s*5\. MODIFICATIONS TO THE DRAWING ARE TO BE APPROVED BY ENGINEERING PRIOR TO COMMENCEMENT\.\s*6\. THE 'AS BUILT' DRAWING IS TO BE SUPPLIED BACK TO ENGINEERING FOR RECORDS\.\s*/g,
//     /^\d+\..*?\n/gm,
//     /< \d+mm\s+±\s+\d+\.\d+mm\s+/g,
//     /ANGLE\s+±\s+\d+°/g,
//     /FABRICATION\s*PRECISION MACHINING.*?(?=±\s+\d+\.\d+mm)/g,
//     /\b\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\b\n/g,
//     /This drawing and any attachments.*?of\s+[A-Za-z\s]+PTY LTD/gs,
//     /(?:DEVELOPMENT|DETAIL) ITEM \d+\s*\(\s*\d+\s*:\s*\d+\s*\)/g,
//     /BILL OF MATERIALS/g,
//     /\d{2}[\/-]\d{2}[\/-]\d{4}/g,
//     /[A-I]\n(?:\d+\n){8}[A-I]\n(?:\d+\n){5}310986\n4\n5/g,
//     // Add more patterns here based on the types of redundant sections you encounter
//   ];

//   let cleanedText = rawData;
//   redundantTextPatterns.forEach((pattern) => {
//     cleanedText = cleanedText.replace(pattern, "");
//   });

//   return cleanedText;
// }

// exports.processPDFsInFolder = functions.https.onRequest(async (req, res) => {
//   cors(req, res, async () => {
//     const folderId = req.body.folderId;
//     const authClient = await authorize();
//     const drive = google.drive({ version: "v3", auth: authClient });

//     try {
//       const fileList = await drive.files.list({
//         q: `'${folderId}' in parents and mimeType='application/pdf'`,
//         fields: "files(id, name)",
//       });

//       let combinedText = "";
//       for (const file of fileList.data.files) {
//         const pdfData = await drive.files.get(
//           {
//             fileId: file.id,
//             alt: "media",
//           },
//           { responseType: "stream" }
//         );

//         const text = await extractTextFromPDF(pdfData.data);
//         combinedText += text + "\n\n";
//       }

//       const txtFileId = await createTextFileInDrive(
//         combinedText,
//         folderId,
//         authClient
//       );
//       res.set("Content-Type", "text/plain");
//       res.status(200).send(txtFileId);
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });
// });

// exports.processPDFsInFolder = functions.https.onRequest(async (req, res) => {
//   cors(req, res, async () => {
//     const folderId = req.body.folderId;
//     const authClient = await authorize();
//     const drive = google.drive({ version: "v3", auth: authClient });

//     try {
//       const fileList = await drive.files.list({
//         q: `'${folderId}' in parents and mimeType='application/pdf'`,
//         fields: "files(id, name)",
//       });

//       // Parallel extraction of text from each PDF with redundant text removal
//       const textExtractionPromises = fileList.data.files.map((file) =>
//         drive.files
//           .get({ fileId: file.id, alt: "media" }, { responseType: "stream" })
//           .then((pdfData) => extractAndRemoveRedundantText(pdfData.data))
//       );

//       // Wait for all extractions to complete
//       const extractedTexts = await Promise.all(textExtractionPromises);

//       // Combine all texts
//       const combinedText = extractedTexts.join("\n\n");

//       // Create a text file in Google Drive
//       const txtFileId = await createTextFileInDrive(
//         combinedText,
//         folderId,
//         authClient
//       );
//       res.set("Content-Type", "text/plain");
//       res.status(200).send(txtFileId);
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });
// });

/** TESTING THREAD RETRIEVAL */

async function createConversationTextFileInDrive(
  text,
  folderId,
  threadId,
  authClient
) {
  const drive = google.drive({ version: "v3", auth: authClient });
  const fileMetadata = {
    name: `Conversation-${threadId}.txt`,
    mimeType: "text/plain",
    parents: [folderId],
  };
  const media = {
    mimeType: "text/plain",
    body: text,
  };

  const file = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: "id",
  });

  return file.data.id;
}

// Function to retrieve the full conversation of a thread from OpenAI
async function getThreadConversation(threadId) {
  try {
    const response = await openai.beta.threads.messages.list(threadId, {
      limit: 100,
    });

    // Extract messages and format them into a conversation string
    const reversedMessages = response.data.reverse();
    let conversation = "";
    reversedMessages.forEach((msg) => {
      if (msg.content && msg.content.length > 0) {
        // Assuming the first element of content array has the text
        const messageText = msg.content[0].text.value;
        conversation += `${msg.role}: ${messageText}\n\n`;
      }
    });
    return conversation;
  } catch (error) {
    console.error("Error fetching thread:", error);
    throw error;
  }
}

exports.getThreadConversation = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const authClient = await authorize();
    const threadId = req.body.threadId;

    if (!threadId) {
      console.error("No threadId provided");
      return res.status(400).send("Missing threadId");
    }

    console.log("Retrieving conversation for threadId:", threadId);

    try {
      const conversation = await getThreadConversation(threadId);
      const fileId = await createConversationTextFileInDrive(
        conversation,
        threadConversationFolderId,
        threadId,
        authClient
      );
      res.set("Content-Type", "text/plain");
      res.status(200).send(fileId);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

/** TESTING FUNCTION FOR STRUCTURING DATA AND CREATING CSV FILE */

// Function to read text file from Google Drive
// async function readTextFileFromDrive(fileId, authClient) {
//   const drive = google.drive({ version: "v3", auth: authClient });
//   const fileData = await drive.files.get(
//     { fileId: fileId, alt: "media" },
//     { responseType: "stream" }
//   );

//   return new Promise((resolve, reject) => {
//     let rawData = "";
//     fileData.data
//       .on("data", (chunk) => (rawData += chunk))
//       .on("end", () => resolve(rawData))
//       .on("error", (error) => reject(error));
//   });
// }

// Function to create a CSV file in Google Drive
// async function createCSVFileInDrive(csvContent, folderId, authClient) {
//   const drive = google.drive({ version: "v3", auth: authClient });
//   const fileMetadata = {
//     name: "ExtractedBOM.csv",
//     mimeType: "text/csv",
//     parents: [folderId],
//   };
//   const media = {
//     mimeType: "text/csv",
//     body: csvContent,
//   };

//   const file = await drive.files.create({
//     resource: fileMetadata,
//     media: media,
//     fields: "id",
//   });

//   return file.data.id;
// }

// Function to extract bill of materials from raw text
// function extractBillOfMaterials(rawText) {
//   const lines = rawText.split("\n");
//   const result = [];
//   const regexPattern = /^(\d+)\s+(.*?)\s+(\S+)\s+(\d+)\s+(\d+)\s*(.*)$/;

//   lines.forEach((line) => {
//     const match = regexPattern.exec(line);
//     if (match) {
//       const [, itemNumber, description, drawingNumber, rev, totalQty, notes] =
//         match;
//       result.push({
//         itemNumber,
//         description,
//         drawingNumber,
//         rev,
//         totalQty,
//         notes,
//       });
//     }
//   });

//   return result;
// }

// Function to convert bill of materials to CSV format
// function convertToCSV(bom) {
//   let csvContent = "ITEM #,DESCRIPTION,DRAWING NO.,REV,TOTAL QTY,NOTES\n";
//   bom.forEach((item) => {
//     const line = `${item.itemNumber},"${item.description}",${item.drawingNumber},${item.rev},${item.totalQty},"${item.notes}"`;
//     csvContent += line + "\n";
//   });
//   return csvContent;
// }

// exports.processFileAndCreateCSV = functions.https.onRequest((req, res) => {
//   cors(req, res, async () => {
//     const folderId = req.body.folderId; // Ensure your request includes 'folderId' and 'fileId'
//     const fileId = req.body.fileId; // The .txt file ID
//     const authClient = await authorize();

//     try {
//       const rawText = await readTextFileFromDrive(fileId, authClient);
//       const bom = extractBillOfMaterials(rawText);
//       const csvContent = convertToCSV(bom);
//       const csvFileId = await createCSVFileInDrive(
//         csvContent,
//         folderId,
//         authClient
//       );
//       res.set("Content-Type", "text/plain");
//       res.send(csvFileId);
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });
// });

/* TESTING NEW FUNCTION THAT TAKES OPENAI FILEID AND THREADID UPLOADING THE FILE TO GOOGLE DRIVE */
// Function to download the file from OpenAI GPT-3
// async function downloadFileFromOpenAI(fileId) {
//   try {
//     const response = await openai.files.content(fileId);
//     const buffer = await response.arrayBuffer();
//     return Buffer.from(buffer);
//   } catch (error) {
//     console.error("Error downloading file from OpenAI:", error);
//     throw new Error("Failed to download file from OpenAI");
//   }
// }

// Function to upload file to Google Drive
// async function uploadCSVToDrive(fileBuffer, folderId, authClient) {
//   const drive = google.drive({ version: "v3", auth: authClient });
//   const fileMetadata = {
//     name: "OpenAIFile.csv",
//     mimeType: "text/csv",
//     parents: [folderId],
//   };

//   // Convert the buffer to a stream
//   const bufferStream = new Readable();
//   bufferStream.push(fileBuffer);
//   bufferStream.push(null); // Signifies the end of the stream

//   const media = {
//     mimeType: "text/csv",
//     body: bufferStream,
//   };

//   try {
//     const file = await drive.files.create({
//       resource: fileMetadata,
//       media: media,
//       fields: "id",
//     });
//     return file.data.id;
//   } catch (error) {
//     console.error("Error uploading file to Google Drive:", error);
//     throw new Error("Failed to upload file to Google Drive");
//   }
// }

// exports.processFileAndUpload = functions.https.onRequest(async (req, res) => {
//   cors(req, res, async () => {
//     try {
//       const { threadId, fileId, folderId } = req.body;
//       if (!threadId || !fileId || !folderId) {
//         return res.status(400).send("Missing threadId, fileId, or folderId");
//       }

//       // Authorize Google Drive API
//       const authClient = await authorize(); // Ensure this function exists and works correctly

//       // Download file from OpenAI
//       const fileBuffer = await downloadFileFromOpenAI(fileId);

//       // Check if fileBuffer is empty
//       if (!fileBuffer || fileBuffer.length === 0) {
//         return res.status(500).send("Received empty file from OpenAI");
//       }

//       // Upload to Google Drive
//       const googleDriveFileId = await uploadCSVToDrive(
//         fileBuffer,
//         folderId,
//         authClient
//       );

//       res.status(200).set("Content-Type", "text/plain").send(googleDriveFileId);
//     } catch (error) {
//       console.error("Error in processFileAndUpload:", error);
//       res.status(500).send("An error occurred during processing");
//     }
//   });
// });
