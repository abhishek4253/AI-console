const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function aiResponse(userInput) {
  // Simple logic for AI responses
  if (userInput.toLowerCase().includes('hello')) {
    return 'Hello! How can I help you?';
  } else if (userInput.toLowerCase().includes('bye')) {
    return 'Goodbye! Have a great day!';
  } else {
    return 'I didn\'t understand that. Can you please rephrase?';
  }
}

function startConsole() {
  rl.question('You: ', (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
      rl.close();
    } else {
      const response = aiResponse(userInput);
      console.log(`AI: ${response}`);
      startConsole();
    }
  });
}

console.log('AI Console - Type "exit" to quit');
startConsole();
