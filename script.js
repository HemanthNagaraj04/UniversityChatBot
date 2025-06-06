(() => {
    const chatArea = document.getElementById('chat-area');
    const inputForm = document.getElementById('input-area');
    const userInput = document.getElementById('user-input');
    const sendBtn = inputForm.querySelector('button');

    userInput.addEventListener('input', () => {
      sendBtn.disabled = userInput.value.trim().length === 0;
    });

    function addMessage(text, sender) {
      const msgDiv = document.createElement('div');
      msgDiv.classList.add('message', sender);
      msgDiv.textContent = text;
      chatArea.appendChild(msgDiv);
      chatArea.scrollTop = chatArea.scrollHeight;
    }

    function getBotResponse(input) {
      const text = input.toLowerCase();

      if (/(hello|hi|hey|greetings)/.test(text)) {
        return "Hello! I'm your university assistant. How can I help you today?";
      }
      if (text.includes('admission') || text.includes('apply') || text.includes('enroll')) {
        return "For admissions, please visit our Admissions Office or check the university website under the admissions section for requirements and deadlines.";
      }
      if (text.includes('course') || text.includes('program') || text.includes('major')) {
        return "We offer a variety of courses across many departments including Computer Science, Business, Arts, and more. You can find detailed course listings on the university website.";
      }
      if (text.includes('schedule') || text.includes('time') || text.includes('opening hours') || text.includes('office hours')) {
        return "University classes typically run Monday through Friday from 8 AM to 4 PM. Administrative offices are open from 9 AM to 5 PM.";
      }
      if (text.includes('contact') || text.includes('phone') || text.includes('email') || text.includes('address')) {
        //add university number, email and address
        return "You can contact the university at (university number) or email (university email). The main campus address is (university address).";
      }
      if (text.includes('library')) {
        return "Our library is open from 8 AM to 10 PM on weekdays and 10 AM to 6 PM on weekends.";
      }
      if (text.includes('cafeteria') || text.includes('food') || text.includes('canteen')) {
        return "The university cafeteria offers a variety of meals from 7 AM till 7 PM every day.";
      }
      if (text.includes('exam') || text.includes('test') || text.includes('finals')) {
        return "Exam schedules are published at the start of each semester on the university portal. Make sure to check your department's page for specific dates.";
      }
      if (text.includes('event') || text.includes('seminar') || text.includes('conference')) {
        return "University events and seminars are posted on the events calendar on our home page. Feel free to attend any public events!";
      }
      return "Sorry, I didn't understand that. Could you please rephrase or ask about admissions, courses, schedules, contact info, or campus facilities? For more info you can contact the college.";
    }
    function botGreeting() {
      addMessage("Welcome to the University Chatbot! How can I assist you today?", 'bot');
    }
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputText = userInput.value.trim();
      if (!inputText) return;

      addMessage(inputText, 'user');
      userInput.value = '';
      sendBtn.disabled = true;
      setTimeout(() => {
        const response = getBotResponse(inputText);
        addMessage(response, 'bot');
      }, 700);
    });
    botGreeting();
    userInput.focus();
  })();
