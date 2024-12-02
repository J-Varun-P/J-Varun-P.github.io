const sentences = [
    "Hello Hitha Garu",
    "Ela Unnarandi?",
    "Merupula ala vachi vellipotharu, Chinukula kasepu undi matladochu ga",
    "Meeru free unnappude lendi",
    "Please take your time to reply, I'll happily wait :)",
    "Bye"
  ];
  const textContainer = document.getElementById('textContainer');
  let currentIndex = 0;
  function updateSentence() {
    textContainer.style.animation = 'slideOut 1.5s forwards';
    setTimeout(() => {
      textContainer.innerHTML = sentences[currentIndex];
      textContainer.style.animation = 'slideIn 1.5s forwards';
      currentIndex = (currentIndex + 1) % sentences.length;
    }, 500);
  }
  updateSentence();
  setInterval(updateSentence, 5500);
  
