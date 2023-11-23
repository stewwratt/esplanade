
<script lang='ts'>
  import { onMount } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { writable } from 'svelte/store';
  import { marked } from 'marked';
  import { current_component, merge_ssr_styles } from 'svelte/internal';

  export let firstname: string;
  const messages: Writable<Array<{ sender: string; content: string; opacity: number, isHtml: boolean}>> = writable([]);
  let chatActive: boolean = true; //think about how this can be initialised onSubmit of the contact form or something
  let userInput: string = '';
  let isDragging: boolean = false;
  let threadId: string = '';
  let awaitingResponse: boolean = false;
  let hasUserMessages = false; // Flag to track if there are user messages


  onMount(async () => {
    console.log("onMount")

    if (chatActive) {
      centerChatContainer();
      messages.set([{ sender: 'Assistant', content: `Hi ${firstname}, how are you today?`, opacity: 1, isHtml: false }]);
      const response = await fetch('https://us-central1-esplanade-46a07.cloudfunctions.net/startNewThread');
      if (response.ok) {
        const data = await response.json();
        threadId = data.threadId;
        console.log("Thread ID set:", threadId); // Add this line
      } else {
        console.error("Failed to start a new thread");
      }
    }
  });

  // Reactive statement for scrolling to bottom when messages update
  // need to fine tune this either 
  // smooth or something
  $: if ($messages.length || awaitingResponse){
    // setTimeout(scrollToBottom, 0);
    centerChatContainer();
  }

  // Reactive statement to check for user messages
  $: hasUserMessages = $messages.some(message => message.sender === 'User');

  // $: if ($messages.length) {
  //   setTimeout(scrollToLatestMessage, 0);
  // }

  // Function to scroll to the bottom of the chat
  function scrollToBottom() {
    const chatContainer = document.querySelector('.messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  function centerChatContainer() {
    console.log("centerChatContainer");
    const chatContainers = document.getElementsByClassName('chat-container');
    if (chatContainers.length > 0) {
        const chatContainer = chatContainers[0]; // Access the first element of the collection
        const yOffset = -100; // Adjust based on your requirements
        const y = chatContainer.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
        console.log("Chat container not found");
    }
  }

  // // Function to scroll to the latest message
  // function scrollToLatestMessage() {
  //   const messagesContainer = document.querySelector('.messages');
  //   const messagesScroll = document.querySelectorAll('.message');
  //   if (messagesContainer && messagesScroll.length > 0) {
  //     const lastMessage = [.length - 1];
  //     const lastMessageTop = lastMessage.offsetTop;
  //     const lastMessageHeight = lastMessage.offsetHeight;
  //     const containerHeight = messagesContainer.offsetHeight;

  //     // Calculate the scroll position to make the latest message fully visible
  //     const scrollPosition = lastMessageTop + lastMessageHeight - containerHeight;
  //     messagesContainer.scrollTop = scrollPosition > 0 ? scrollPosition : 0;
  //   }
  // }

  function isHtmlContent(str) {
    // A basic regex pattern to check for HTML tags
    const pattern = /<[^>]+>/;
    return pattern.test(str);
  }

  async function sendMessage() {
    console.log("attempting to send message");
    if (userInput.trim() === '' || !threadId) {
        console.log("No input or threadId is missing");
        return;
    }

    // messages.update(current => [
    //   ...current.map(msg => ({ ...msg, opacity: msg.sender === 'User' ? 0.7 : 1 })),
    //   { sender: 'User', content: userInput.trim(), opacity: 1, isHtml: isHtmlContent(userInput) }
    // ]);

    messages.update(current => {
      // Reduce opacity for all previous messages
      const updatedMessages = current.map(msg => ({ ...msg, opacity: 0.7 }));
      // Add new user message with full opacity
      updatedMessages.push({ sender: 'User', content: userInput.trim(), opacity: 1, isHtml: isHtmlContent(userInput) });
      return updatedMessages;
    });
    

    userInput = '';

    try {
        const response = await fetch('https://us-central1-esplanade-46a07.cloudfunctions.net/sendMessageToThread', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ threadId, message: $messages[$messages.length - 1].content })
        });

        if (response.ok) {
            const { runId } = await response.json();
            checkForResponse(runId);
            console.log("Message sent, runId:", runId);
        } else {
            console.error("Failed to send message, status:", response.status);
            const responseBody = await response.text();
            console.error("Response body:", responseBody);
        }
    } catch (error) {
        console.error("Error sending message:", error);
    }
    awaitingResponse = true; // Set awaitingResponse to true before sending the message

    
  }

  async function checkForResponse(runId) {
    console.log("Requesting response from OpenAI...");

    try {
      const response = await fetch(`https://us-central1-esplanade-46a07.cloudfunctions.net/getAssistantResponse?threadId=${threadId}&runId=${runId}`);
      
      if (response.ok) {
        awaitingResponse = false; // Set awaitingResponse to false after receiving the response
        const data = await response.json();
        if (data.reply && data.reply.length > 0) {
          let assistantMessageContent = data.reply[0].text.value;
          assistantMessageContent = marked.parse(assistantMessageContent);
          
          console.log("Received response from OpenAI:", assistantMessageContent);

          messages.update(current => {
            // Reduce opacity for all previous messages
            const updatedMessages = current.map(msg => ({ ...msg, opacity: 0.8 }));
            // Add assistant message with full opacity
            updatedMessages.push({ sender: 'Assistant', content: assistantMessageContent, opacity: 1, isHtml: isHtmlContent(assistantMessageContent) });
            return updatedMessages;
          });
        } else {
          console.log("No reply in response.");
        }
      } else {
        console.error("Error fetching response:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error requesting response:", error);
    }

    console.log("Finished requesting response.");
  }

  function triggerFileUpload() {
    const fileInput = document.getElementById('file-upload');
    fileInput.click();
  }

  function handleDragOver(event) {
    event.preventDefault();
    isDragging = true;
  }

  function handleDragLeave(event) {
    event.preventDefault();
    isDragging = false;
  }

  function handleDrop(event) {
    event.preventDefault();
    isDragging = false;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      chatActive = true;
      for (const file of files) {
        messages.update(current => [...current, { sender: 'User', content: `Dropped file: ${file.name}`, opacity: 1, isHtml: false }]);
      }
    }
  }

  function handleFileSelect(event) {
    const files = event.target.files;
    if (files.length > 0) {
      chatActive = true;
      for (const file of files) {
        messages.update(current => [...current, { sender: 'User', content: `Selected file: ${file.name}`, opacity: 1, isHtml: false }]);
      }
    }
  }
</script>

<style>
  * {
    font-family: "Red Hat Display", sans-serif;
  }

  .chat-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 10px;
    background-color: #ffffff00; /* Translucent background */
    border-radius: 8px;
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); Soft shadow for depth */
    /* backdrop-filter: blur(10px); Blur effect for the background */
    /* border: 1px solid rgba(255, 255, 255, 0.2); Subtle border */
    margin-bottom: 250px;
  }

  /* Style for the scroll bar */
  .messages::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
    background-color: transparent; /* Transparent background */
  }

  /* Style for the scrollbar track */
  .messages::-webkit-scrollbar-track {
    background-color: transparent; /* Transparent background */
  }

  /* Style for the scrollbar thumb */
  .messages::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3); /* Transparent background with some opacity */
    border-radius: 4px; /* Rounded corners */
  }

  .message-placeholder {
    color: #cccccc; /* Light grey color for placeholder text */
    font-style: italic;
  }

  .messages {
    height: auto; /* Initial height */
    max-height: 500px; /* Initial max height, adjust as needed */
    transition: max-height 0.5s ease-in-out; /* Smooth transition for height */
    overflow-y: auto;
    margin-top: 10px;
    padding: 10px;
    color: white;
    background-color: transparent; /* Ensure messages have no background */
    font-size: 1.55em;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: opacity 0.3s ease;
    --mask: linear-gradient(
        to bottom, 
        transparent 0%, rgba(0,0,0, 1) 5%, /* Start fading in earlier */
        rgba(0,0,0, 1) 95%, transparent 100% /* Start fading out earlier */
    ) 100% 50% / 100% 100% repeat-x;
    -webkit-mask: var(--mask); 
    mask: var(--mask);
  }

  /* Style for expanded messages container */
  .messages.expanded {
    height: 500px; /* or any other height you prefer */
    /* ... other styles as needed */
  }

  /* Style for the assistant's initial message */
  .message.assistant:first-child {
    font-weight: bold;
    color: white;
    opacity: 1; /* Full opacity for the initial assistant message */
  }

  /* Style for the user's message */
  .message.user {
    /* Slightly lower opacity for sent user messages */
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  .message-icon {
    display: inline-block;
    margin-right: 10px; /* Space between icon and message */
  }

  .message.assistant .message-icon {
    color: blue; /* Or any color/style for the assistant icon */
  }

  .message.user .message-icon {
    color: green; /* Or any color/style for the user icon */
  }


  .chat-input-container {
    display: flex;
    align-items: center;
    background-color: #ffffff00; /* White background for the input container */
    border-radius: 20px;
    overflow: hidden; /* Ensures children respect border radius */
  }

  .file-upload-icon, .send-button {
    color: #ffffff; /* Dark color for icons for contrast */
    padding: 10px;
    cursor: pointer;
    width: 40px;
  }

  .chat-input {
    flex-grow: 1;
    background-color: transparent; /* White background for the input */
    border: none;
    outline: none;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px; /* Slightly larger font for readability */
    color: white;
    opacity: 1; /* Full opacity while typing */
    font-size: 1.5rem;
  }

  /* Placeholder styling */
  .chat-input::placeholder {
    color: white;
    opacity: 0.7;
  }

  .file-upload {
    display: none;
  }

  /* Additional styles for drag-and-drop functionality */
  .drag-over {
    background-color: rgba(255, 255, 255, 0.07); /* Lighter background when dragging files over */
  }

  /* Style adjustments for icons */
  .file-upload-icon::before, .send-button::before {
    
  }

  .send-button::before {
    content: '➡️'; /* Replace with your icons */
  }
</style>

<div class="chat-container"
  on:dragover={handleDragOver}
  on:dragleave={handleDragLeave}
  on:drop={handleDrop}
  class:drag-over={isDragging}>
  <div class={`messages ${hasUserMessages ? 'expanded' : ''}`}>
    {#each $messages as message}
      <div class="message {message.sender === 'Assistant' ? 'assistant' : 'user'}"
           style="opacity: {message.opacity}">
        <!-- <span class="message-icon">{message.sender === 'Assistant' ? '🤖' : '👤'}</span> -->
          {#if message.isHtml}
            {@html message.content}
          {:else}
            {message.content}
          {/if}
      </div>
    {/each}
    {#if awaitingResponse}
      <div class="message-placeholder">Typing...</div>
    {/if}
  </div>
  <div class="chat-input-container">
    <!-- Replace with actual file upload icon once available -->
    <!-- <img src='../fileUploadIcon.png' class="file-upload-icon" on:click={triggerFileUpload} /> -->
    <input
      class="chat-input"
      bind:value={userInput}
      placeholder="Start typing or upload a file..."
      on:keydown={e => e.key === 'Enter' && sendMessage()}
    />
    <!-- Uncomment and replace with actual send icon once available -->
    <!-- <button class="send-button" on:click={sendMessage}></button> -->
    <input
      id="file-upload"
      type="file"
      class="file-upload"
      multiple
      on:change={handleFileSelect}
    />
  </div>
</div>