import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

const createAssistant = require("./openai");


export default app;
