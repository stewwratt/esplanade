
<script lang='ts'>
  import { onMount, tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import type { Writable } from 'svelte/store';
  import { writable } from 'svelte/store';
  import { marked } from 'marked';

  export let firstname: string;
  const messages: Writable<Array<{ sender: string; content: string; opacity: number, isHtml: boolean}>> = writable([]);
  let chatActive: boolean = true; //think about how this can be initialised onSubmit of the contact form or something
  let userInput: string = '';
  let isDragging: boolean = false;
  let threadId: string = '';
  let awaitingResponse: boolean = false;
  let hasUserMessages = false; // Flag to track if there are user messages
  let chatInput: HTMLTextAreaElement; // Variable to hold the reference to the chat input element
  let isMobile: boolean;


  onMount(async () => {
    console.log("onMount")

    if (chatActive) {
      chatInput.focus();
      messages.set([{ sender: 'Assistant', content: `<p style="font-weight:bold;">Hi ${firstname}, how are you today?</p>`, opacity: 1, isHtml: true }]);
      const response = await fetch('https://us-central1-esplanade-46a07.cloudfunctions.net/startNewThread');
      if (response.ok) {
        const data = await response.json();
        threadId = data.threadId;
        console.log("Thread ID set:", threadId); // Add this line
      } else {
        console.error("Failed to start a new thread");
        console.error("Response status:", response.status);
      }
    }


    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // if (isMobile && chatInput) {
    //   chatInput.focusInput();
    // }

    // if (chatInput) {
    //   chatInput.focus();
    // }

  });

  // Reactive statement for scrolling to bottom when messages update
  // need to fine tune this either 
  // smooth or something
  // $: if ($messages.length || awaitingResponse){
  //   setTimeout(scrollToBottom, 0);
  //   // centerChatContainer();
  // }

  // Reactive statement to check for user messages
  $: hasUserMessages = $messages.some(message => message.sender === 'User');

  $: lastMessage = $messages[$messages.length - 1];


  // $: if (hasUserMessages) {
  //   centerChatContainer();
  // }

  // $: if ($messages.length) {
  //   setTimeout(scrollToLatestMessage, 0);
  // }

  $: if (awaitingResponse) {
    setTimeout(scrollToBottom, 200);
  }

  async function autoGrow() {
    if (chatInput) {
        await tick(); // Wait for the DOM to update
        const maxHeight = 200; // Maximum height in pixels
        chatInput.style.height = 'auto'; // Reset height to recalculate
        if (chatInput.scrollHeight > maxHeight) {
            chatInput.style.overflowY = 'auto'; // Enable scroll
            chatInput.style.height = `${maxHeight}px`; // Set to max height
        } else {
            chatInput.style.overflowY = 'hidden'; // Hide scroll
            chatInput.style.height = `${chatInput.scrollHeight}px`; // Expand to scroll height
        }
    }
}
  
  // Call autoGrow whenever userInput changes
  $: userInput, autoGrow();


  // Function to scroll to the start of the latest assistant message
  function scrollToLatestAssistantMessage() {
    const messagesContainer = document.querySelector('.messages');
    const assistantMessages = messagesContainer.querySelectorAll('.message.assistant');
    const lastAssistantMessage = assistantMessages[assistantMessages.length - 1];

    console.log(lastAssistantMessage)
    if (lastAssistantMessage) {
      lastAssistantMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Reactive statement to scroll the latest assistant message into view
  $: {
    if ($messages.length && $messages[$messages.length - 1].sender === 'Assistant') {
      // Delay the scroll to ensure the DOM has updated
      setTimeout(() => {
        scrollToLatestAssistantMessage();
        console.log("running scroll into")

        // document.querySelector('.messages .message.assistant:last-child').scrollIntoView({ behavior: 'smooth', block: 'start'});

      }, 500); // Adjust delay as needed
    }
  }

  // Function to scroll to the bottom of the chat
  function scrollToBottom() {
    const chatContainer = document.querySelector('.messages');
    if (chatContainer) {
      chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
    }
  }

  function focusInput() {
    if (isMobile && chatInput) {
      chatInput.focus();

      // Delay the scroll adjustment to allow for keyboard appearance
      setTimeout(() => {
        const yOffset = -20; // Adjust this value as needed
        const y = chatInput.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 200); // Adjust this delay as needed
    }
  }

  // function scrollToLatestMessage() {
  //   const chatContainer = document.querySelector('.messages');
  //   if (chatContainer) {
  //     chatContainer.scrollTo({ top: document.querySelector('message').scrollIntoView, behavior: 'smooth' });
  //   }
  // }

  function centerChatContainer() {
    console.log("centerChatContainer");
    const chatContainers = document.getElementsByClassName('chat-container');
    if (chatContainers.length > 0) {
        const chatContainer = chatContainers[0]; // Access the first element of the collection
        const yOffset = -1000; // Adjust based on your requirements
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

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a new line
      sendMessage();
    } else if (event.key === 'Enter' && event.shiftKey) {
      // Allow for new line
      userInput += '\n';
    }
  }

  async function sendMessage() {
    console.log("attempting to send message");
    if (userInput.trim() === '' || !threadId) {
        console.log("No input or threadId is missing");
        return;
    }

    const formattedUserInput = marked.parse(userInput);

    messages.update(current => {
      // Reduce opacity for all previous messages
      const updatedMessages = current.map(msg => ({ ...msg, opacity: 0.7 }));
      // Add new user message with full opacity
      updatedMessages.push({ sender: 'User', content: userInput, opacity: 1, isHtml: isHtmlContent(userInput) });
      return updatedMessages;
    });
    

    userInput = '';
    awaitingResponse = true; // Set awaitingResponse to true before sending the message

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

    
  }

  async function checkForResponse(runId) {
    console.log("Requesting response from OpenAI...");

    try {
      const response = await fetch(`https://us-central1-esplanade-46a07.cloudfunctions.net/getAssistantResponse?threadId=${threadId}&runId=${runId}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.reply && data.reply.length > 0) {
          let assistantMessageContent = data.reply[0].text.value;
          assistantMessageContent = marked.parse(assistantMessageContent);
          
          console.log("Received response from OpenAI:", assistantMessageContent);
          awaitingResponse = false; // Set awaitingResponse to false after receiving the response

          messages.update(current => {
            // Reduce opacity for all previous messages
            const updatedMessages = current.map(msg => ({ ...msg, opacity: 0.7 }));
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
    max-width: 728px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff00; /* Translucent background */
    border-radius: 8px;
    /* Other styles */
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
    color: rgba(255, 255, 255, 0.7); /* Light grey color for placeholder text */
    font-style: italic;
    margin-top: 25px;
    margin-bottom: 10px;
    position: relative; /* Set to relative to position the pseudo-element */
    /* animation: fadeOut 0.5s ease-out forwards; */
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  } 

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes typingDots {
    0% { content: ''; }
    25% { content: '.'; }
    50% { content: '..'; }
    75% { content: '...'; }
    100% { content: ''; }
  }

  .message-placeholder::after {
    content: '';
    position: absolute;
    /* right: 10; Position the dots at the end of the text */
    animation: typingDots 1.5s steps(4, end) infinite; /* Apply the animation */
  }

  .messages {
    height: auto; /* Initial height */
    max-height: 500px; /* Initial max height, adjust as needed */
    transition: max-height 2s ease-in-out; /* Smooth transition for height */
    overflow-y: auto;
    margin-top: 10px;
    padding: 10px 10px 10px 0px;
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
    overflow-wrap: break-word; /* Alternative to word-wrap for better support */
  }

  .message-row {
    display: flex;
    align-items: flex-start; /* Align items to the start of the container */
    gap: 10px; /* Adjust the gap between icon and message */
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
    margin-top: 10px;
  }


  /* Style for the user's message */
  /* .message.user { */
    /* Slightly lower opacity for sent user messages */
    /* opacity: 0.7;
    transition: opacity 0.3s ease;
  } */

  .message-icon {
    margin-top: 30px;
    display: flex; /* This will ensure the icons are aligned properly */
    align-items: center; /* Center the icons vertically */
    justify-content: center; /* Center the icons horizontally */
    /* display: inline-block; */
    margin-right: 10px; /* Space between icon and message */
    padding-left: 10px;
    opacity: 0.7; /* Default opacity for all icons */

  }

  .message-icon.active {
    opacity: 1; /* Full opacity for the active (most recent) icon */
  }

  .chat-input-container {
    display: flex;
    align-items: center;
    background-color: #ffffff16; /* White background for the input container */
    border-radius: 10px;
    overflow: auto; /* Ensures children respect border radius */
    border: #ffffff;
    border-width: 1px;
    padding-left: 10px;
    padding-right: 10px;

  }

  .file-upload-icon {
    color: #ffffff;
    margin-right: 10px;
    cursor: pointer;
  }

  .chat-input {
    flex-grow: 1;
    background-color: transparent; /* Transparent background for the input */
    border: none;
    outline: none;
    margin-top: 10px;
    padding: 10px;
    font-size: 1.5rem; /* Slightly larger font for readability */
    color: white;
    line-height: 1.5; /* Adjust line height if needed */
    resize: none; /* Disable manual resizing */
    overflow-y: auto; /* Allow vertical scrolling */
    max-height: 200px; /* Set maximum height before scrolling */
  }

  /* Placeholder styling */
  .chat-input::placeholder {
    color: white;
    opacity: 0.7;
  }

  /* Style for the chat input scroll bar */
  .chat-input::-webkit-scrollbar {
      width: 8px; /* Width of the scrollbar */
      background-color: transparent; /* Transparent background */
  }

  /* Style for the chat input scrollbar track */
  .chat-input::-webkit-scrollbar-track {
      background-color: transparent; /* Transparent background */
  }

  /* Style for the chat input scrollbar thumb */
  .chat-input::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3); /* Translucent white with some opacity */
      border-radius: 4px; /* Rounded corners for the scrollbar thumb */
  }

  /* Optional: Style for the chat input scrollbar thumb on hover */
  .chat-input::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Slightly more visible on hover */
  }

  .file-upload {
    display: none;
  }

  .send-button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    margin: 0; /* Resets any default margin */
    font: inherit;
    cursor: pointer;
    outline: inherit;
    display: flex; /* Use flex to center the content */
    align-items: center; /* Vertical alignment */
    justify-content: center; /* Horizontal alignment */
    font-size: 24px; /* Adjust size as needed */
    height: 40px; /* Match height with other elements if necessary */
    width: 40px; /* Match width with other elements if necessary */
    line-height: 1; /* Adjust line height to prevent extra space */
  }

  .send-button.send-button::clicked {
    background-color: #ffffff14;
  }

  /* Additional styles for drag-and-drop functionality */
  .drag-over {
    background-color: rgba(255, 255, 255, 0.07); /* Lighter background when dragging files over */
  }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
    color:#ffffff;
  }

  @media (max-width: 768px) {
    .chat-container {
      margin-bottom: 100px;
    }

    .messages {
      font-size: 1.2em;
    }

    .chat-input {
      font-size: 1.2em;
    }

    .message-icon {
      margin-top: 20px;
    } 
  }
</style>

<div class="chat-container"
  on:dragover={handleDragOver}
  on:dragleave={handleDragLeave}
  on:drop={handleDrop}
  class:drag-over={isDragging}>
  <!-- <span class="message-icon">{message.sender === 'Assistant' ? '🤖' : '👤'}</span> -->
  <div class={`messages ${hasUserMessages ? 'expanded' : ''}`}>
    {#each $messages as message}
    <div class="message-row">
      <span class="message-icon material-symbols-outlined {message === lastMessage ? 'active' : ''}">
        {message.sender === 'Assistant' ? 'support_agent' : 'account_circle'}
      </span>
      <div class={`message ${message.sender.toLowerCase()}`} style="opacity: {message.opacity}">
        {#if message.isHtml}
          {@html message.content}
        {:else}
          {@html marked.parse(message.content)}
        {/if}
      </div>
    </div>
  {/each}
    {#if awaitingResponse}
      <div class="message-row">
        <span class="message-icon material-symbols-outlined">support_agent</span>
        <div class="message-placeholder" in:fade={{ duration: 200, delay: 200 }}
            out:fade={{ duration: 200, delay: 0 }}>
          Typing
        </div>
      </div>
    {/if}
  </div>
  <div class="chat-input-container">
    <!-- Replace with actual file upload icon once available -->
    <!-- <img src='../fileUploadIcon.png' class="file-upload-icon" on:click={triggerFileUpload} /> -->
   <!-- <input
      bind:this={chatInput}
      class="chat-input"
      bind:value={userInput}
      placeholder="Start typing or upload a file..."
      on:keydown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
    /> -->
    <span class="material-symbols-outlined file-upload-icon">
      attach_file
      </span>

    <textarea
      class="chat-input"
      placeholder="Start typing or upload a file..."
      rows="1"
      bind:this={chatInput}
      bind:value={userInput}
      on:input={autoGrow}
      on:keydown={handleKeyDown}
    ></textarea>
    <!-- Uncomment and replace with actual send icon once available -->
    <!-- <button class="send-button" on:click={sendMessage}></button> -->
    <button class="material-symbols-outlined send-button" on:click={sendMessage}>
      send
    </button>
    <input
      id="file-upload"
      type="file"
      class="file-upload"
      multiple
      on:change={handleFileSelect}
    />
  </div>
</div>