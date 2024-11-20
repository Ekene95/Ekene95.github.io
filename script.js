// Glitch effect function for header
function glitchText(element, originalText) {
  const glitchCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%&$';
  const randomChar = () => glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)];

  let interval = setInterval(() => {
    element.innerText = originalText.split('').map(char => {
      return Math.random() > 0.7 ? randomChar() : char;
    }).join('');
  }, 50);

  setTimeout(() => clearInterval(interval), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const headerTitle = document.querySelector('header h1');
  const originalText = headerTitle.innerText;

  headerTitle.addEventListener('mouseover', () => {
    glitchText(headerTitle, originalText);
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
