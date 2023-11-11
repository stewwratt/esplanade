//import required dependencies
import dotenv from "dotenv";
import OpenAI from "openai";
import readline from "readline";

dotenv.config();

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create openai connection
const secretKey = process.env.OPENAI_SECRET_KEY;
const openai = new OpenAI({
  apiKey: secretKey,
});

async function askQuestion(question) {
  return new Promise((resolve, reject) => {
    readLineInterface.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  try {
    const assistant = await openai.beta.assistants.create({
      name: "Esplanade Assistant",
      instructions: "You are an AI appointment setter consultant",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-3.5-turbo-1106",
    });

    // log the first greeting
    // this is where we can add the first standard message to the chat for example
    // take the first name from the contact form and add it to the greeting "Hi {name}, thank you for submitting your interest..."
    console.log("test");

    // Create a thread
    const thread = await openai.beta.threads.create();

    // Use keepAsking as a state variable to keep asking questions
    let keepAsking = true;
    while (keepAsking) {
      console.log("in loop");
      const userQuestion = await askQuestion("\nWhat is your question? ");

      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: userQuestion,
      });

      // use runs to wait for the assistant response and then retrieve it
      const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: assistant.id,
      });

      let runStatus = await openai.beta.threads.runs.retrieve(
        thread.id,
        run.id
      );

      // Polling mechanism to see if runStatus is completed
      // this should be more robust - this might infinite loop
      while (runStatus.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      }

      const messages = await openai.beta.threads.messages.list(thread.id);

      // Find the last message for the current run
      // Find the last message for the current run
      const lastMessageForRun = messages.data
        .filter(
          (message) => message.run_id === run.id && message.role === "assistant"
        )
        .pop();

    //   console.log(lastMessageForRun);

      // If an assistant message is found, console.log() it
      if (lastMessageForRun && lastMessageForRun.content) {
        // Extracting and displaying the text content of the assistant's message
        const assistantResponse = lastMessageForRun.content[0].text.value;
        console.log("Assistant says: " + assistantResponse);
      }

      const continueAsking = await askQuestion(
        "Do you have another question? (y/n)"
      );
      keepAsking = continueAsking.toLowerCase() === "yes";

      // if the keepAsking is falsy then show an ending message
      if (!keepAsking) {
        console.log("Thank you for chatting with me!");
      }
    }
  } catch (err) {
    console.error(err);
  }
}

main();

//import required dependencies
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

// create openai connection
const secretKey = process.env.OPENAI_SECRET_KEY;
const openai = new OpenAI({
    apiKey: secretKey,
});

async function askQuestion(question) {
    const prompt = `The following is a conversation with an AI assistant. The assistant helps you with your programming tasks. \n\nUser: ${question}\nAI:`;
    const completions = await openai.complete({
        engine: "davinci",
        prompt,
        maxTokens: 1024,
        n: 1,
        stop: "\n",
    });
    const message = completions.choices[0].text.trim();
    return message;
}

export default askQuestion;
