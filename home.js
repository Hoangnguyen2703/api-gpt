function toggleMenu() {
    var menu = document.getElementById('userMenu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Đóng menu khi click bên ngoài menu
document.addEventListener('click', function(event) {
    var menu = document.getElementById('userMenu');
    console.log('Document Clicked');
    if (event.target.closest('.icon-user') || event.target.closest('.menu') || event.target.closest('.div-chua-chu')) {
        // Click vào biểu tượng người dùng hoặc menu, không đóng menu
        return;
    }
    // Click bên ngoài biểu tượng người dùng và menu, đóng menu
    menu.style.display = 'none';
});

const apiKey = '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'; // Thay YOUR_API_KEY bằng API Key của bạn
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

function displayMessage(role, content) {
chatLog.innerHTML += `<div><strong>${role}:</strong> ${content}</div>`;
}

function sendMessage() {
const userMessage = userInput.value;
displayMessage('Bạn', userMessage);

// Gửi yêu cầu đến API của ChatGPT
$.ajax({
url: 'https://api.openai.com/v1/chat/completions',
type: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apiKey}`
},
data: JSON.stringify({
model: 'gpt-3.5-turbo',
messages: [
{ role: 'system', content: 'You are a chatbot.' },
{ role: 'user', content: userMessage }
]
}),
success: function(response) {
const chatGPTResponse = response.choices[0].message.content;
displayMessage('S-GPT', chatGPTResponse);
},
error: function(xhr, status, error) {
console.error('Error sending message:', error);
console.log(xhr.responseText);
displayMessage('S-GPT', 'An error occurred while processing your request.');
}
});

// Xóa nội dung đầu vào người dùng
userInput.value = '';
}