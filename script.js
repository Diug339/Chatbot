document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage('Usuario', userInput, 'user-message');

    const botResponse = generateResponse(userInput);

    appendMessage('Chatbot', botResponse, 'bot-message');

    document.getElementById('user-input').value = '';
});

function appendMessage(sender, message, className) {
    const chatHistory = document.getElementById('chat-history');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add('message', className)
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function generateResponse(userInput) {
    return "Esta es una respuesta automática.";
}
