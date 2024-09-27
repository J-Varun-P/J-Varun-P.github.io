const sentences = [
  "Be safe in this hurricane",
  "Stay indoors and protect yourself",
  "Check on your neighbors",
  "Keep your emergency kit ready",
];
const textContainer = document.getElementById('textContainer');
let index = 0;
function changeSentence() {
  textContainer.style.opacity = '0';
  textContainer.style.width = '0';
  setTimeout(() => {
    index = (index + 1) % sentences.length;
    textContainer.textContent = sentences[index];
    textContainer.style.width = '100%';
    textContainer.style.opacity = '1';
  }, 500);
}
textContainer.textContent = sentences[index];
textContainer.style.width = '100%';
textContainer.style.opacity = '1';
setInterval(changeSentence, 4000);
