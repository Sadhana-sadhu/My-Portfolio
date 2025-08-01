const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["I'm a Frontend Developer", "I'm a Database Developer (MySQL)"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeLoop() {
  const currentWord = words[wordIndex];

  if (typing) {
    if (charIndex < currentWord.length) {
      typedText.textContent += currentWord.charAt(charIndex);
      charIndex++;
      setTimeout(typeLoop, 100);
    } else {
      typing = false;
      setTimeout(typeLoop, 1200);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeLoop, 60);
    } else {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeLoop, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeLoop);
window.addEventListener('scroll', function () {
  const sidebar = document.getElementById('iconSidebar');
  const homeSection = document.getElementById('home');
  const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

  if (window.scrollY < homeBottom) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
});
