const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

function sendMessage() {
    const message = chatInput.value;
    if (message.trim() === '') return;

    appendMessage('user', message);
    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botMessage = `Bot: ${message}`;
        appendMessage('bot', botMessage);
    }, 1000);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function consultaBanco(url, methodo, data) {
    return fetch(url, {
        method: methodo,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json());
}