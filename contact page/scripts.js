function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const inputField = document.getElementById('message-input');
    const message = inputField.value;
  
    if (message.trim() !== "") {
      // Create new user message
      const userMessage = document.createElement('div');
      userMessage.className = 'chat-message user-message';
      userMessage.innerHTML = `<p>${message}</p>`;
  
      // Append user message to chat box
      chatBox.appendChild(userMessage);
  
      // Clear the input field
      inputField.value = '';
  
      // Scroll to the bottom of the chat box
      chatBox.scrollTop = chatBox.scrollHeight;
  
      // Simulate helper response
      setTimeout(() => {
        const helperMessage = document.createElement('div');
        helperMessage.className = 'chat-message helper-message';
        helperMessage.innerHTML = `<p>We received your message. How can we assist you further?</p>`;
        chatBox.appendChild(helperMessage);
  
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1000);
    }
  }
  
  function goBack() {
    alert("Going back to the previous page.");
    window.history.back();
  }
  
  function startCall() {
    alert("Starting a call with support...");
    // You can implement actual calling functionality here if needed
  }
  