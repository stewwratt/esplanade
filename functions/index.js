const functions = require("firebase-functions");
const OpenAI = require("openai");
const cors = require("cors")({origin: true});

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: "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",
});

// Function to start a new thread
exports.startNewThread = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Create a new thread
      const thread = await openai.beta.threads.create();
      res.json({threadId: thread.id});
    } catch (error) {
      console.error("Error creating new thread:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Function to send a message to a thread
exports.sendMessageToThread = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const {threadId, message} = req.body;

    try {
      // Add the user's message to the thread
      await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: message,
      });

      // Run the assistant on the thread
      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: "asst_eef2zgPai2qPmReZNBSP4GBH",
      });

      res.json({runId: run.id});
    } catch (error) {
      console.error("Error sending message to thread:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Function to retrieve the assistant's response
exports.getAssistantResponse = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const completed = false;

    if (req.method !== "GET") {
      return res.status(405).json({error: "Method Not Allowed"});
    }

    const {threadId, runId} = req.query;

    try {
      while (!completed) {
        // eslint-disable-next-line max-len
        const runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
        if (runStatus.status === "completed") {
          const messages = await openai.beta.threads.messages.list(threadId);
          const lastMessage = messages.data.find((m) => m.role === "assistant");
          return res.json({reply: lastMessage.content});
        } else {
          // Wait for a short period before checking the status again
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    } catch (error) {
      console.error("Error retrieving assistant response:", error);
      res.status(500).json({error: "Internal Server Error"});
    }
  });
});
