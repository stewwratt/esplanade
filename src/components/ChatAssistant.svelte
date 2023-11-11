<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    const messages = writable([]);
    let userInput = '';
  
    // Function to send the message to the server and receive the response
    async function sendMessage() {
      if (userInput.trim() === '') return;
      const content = userInput;
      userInput = ''; // clear the input after sending
      messages.update(current => [...current, { sender: 'You', content }]);
  
      try {
        const response = await fetch('/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: content }),
        });
        const data = await response.json();
        messages.update(current => [...current, { sender: 'Assistant', content: data }]);
      } catch (error) {
        console.error('Error:', error);
        messages.update(current => [...current, { sender: 'Assistant', content: 'Sorry, there was an error.' }]);
      }
    }
  
    onMount(() => {
      // Initialize conversation if needed
    });
  </script>
  
  <style>
    .chat-container {
      max-width: 600px;
      margin: auto;
      border: 1px solid #ddd;
      padding: 1em;
      background-color: #f9f9f9;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
  
    .messages {
      height: 300px;
      overflow-y: auto;
      margin-bottom: 1em;
      background-color: #fff;
      padding: 0.5em;
      border: 1px solid #eee;
      border-radius: 8px;
    }
  
    .message {
      margin: 0.5em 0;
      padding: 0.5em;
      border-radius: 8px;
      background-color: #e7f5ff;
      border: 1px solid #d0eaff;
    }
  
    .assistant {
      color: #007bff;
      background-color: #e7f5ff;
    }
  
    .user {
      color: #28a745;
      background-color: #e9ffe9;
    }
  
    textarea {
      width: calc(100% - 1em);
      padding: 0.5em;
      margin-bottom: 0.5em;
      border: 1px solid #ddd;
      border-radius: 8px;
      resize: none;
    }
  
    button {
      padding: 0.5em 1em;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      float: right;
      margin-right: 0.5em;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    /* Clear float */
    .clear {
      clear: both;
    }
  </style>
  
  <div class="chat-container">
    <div class="messages">
      {#each $messages as message (message.content)}
        <div class="message {message.sender === 'You' ? 'user' : 'assistant'}">
          <strong>{message.sender}:</strong> {message.content}
        </div>
      {/each}
    </div>
    <textarea bind:value={userInput} on:keydown={(e) => e.key === 'Enter' && sendMessage()}></textarea>
    <button on:click={sendMessage}>Send</button>
    <div class="clear"></div>
  </div>

  
  