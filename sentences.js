const sentences = [
    "Hi Kaysen",
    "Be safe in this Hurricane Helene",
    "I only shared the game updates more :( because you said you were excited for the game",
    "Did it overwhelm you again?",
    "I'm sorry if it did, I'm trying my best to be very moderate",
    "That's why I didn't message for 2 weeks and waiting for your reply instead",
    "Please take your time to reply when you don't feel overwhelmed, I'll happily wait",
    "I only messaged this time because of the Hurricane Helene",
    "Stay Safe :)",
    "Bye"
  ];
  const textContainer = document.getElementById('textContainer');
  let currentIndex = 0;
  function updateSentence() {
    textContainer.style.animation = 'slideOut 1.5s forwards';
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % sentences.length;
      textContainer.textContent = sentences[currentIndex];
      textContainer.style.animation = 'slideIn 1.5s forwards';
    }, 500);
  }
  setInterval(updateSentence, 5500);
  updateSentence();
  