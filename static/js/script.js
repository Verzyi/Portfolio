let wordIndex = 0;
let charIndex = 0;
let words;

if (window.innerWidth < 450) {
    words = ['Front-End Dev', 'Back-End Dev', 'Full-Stack Dev', 'Python Dev', 'Engineer', 'Software Dev'];
} else {
    words = ['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Python Developer', 'Software Engineer', 'Software Developer'];
}
function type() {
    if (charIndex < words[wordIndex].length) {
        document.getElementById('typing-text').innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    } else {
        setTimeout(erase, 1500); // Time before erasing the word
    }
}

function erase() {
    if (charIndex > 0) {
        const currentWord = words[wordIndex];
        document.getElementById('typing-text').innerHTML = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here (in milliseconds)
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); // Time before typing the next word
    }
}

// Start the typing animation
type();