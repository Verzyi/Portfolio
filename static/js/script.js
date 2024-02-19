let wordIndex = 0;
let charIndex = 0;
let words;

function type() {
  
  // console.log(window.innerWidth);
  if (window.innerWidth < 450) {
        words = ['Front-End Dev', 'Back-End Dev', 'Full-Stack Dev', 'Python Dev', 'Engineer', 'Software Dev'];
    } else {
        words = ['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Python Developer', 'Software Engineer', 'Software Developer'];
    }

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



// Define an object to map skills to their corresponding background colors
const skillColors = {
    'React': 'red',
    'AWS': 'blue',
    'Flask': 'Fuchsia',
    'Python': 'yellow',
    'JavaScript': 'orange',
    'HTML': 'purple',
    'CSS': 'pink',
    'SQL': 'green',
    'Git': 'brown'

    // Add more skills and colors as needed
};

// Function to set the background color of skill buttons based on text
function setSkillButtonColors() {
    const skillButtons = document.getElementsByClassName('skills-button');
    for (let i = 0; i < skillButtons.length; i++) {
        const skill = skillButtons[i].textContent.trim();
        const color = skillColors[skill];
        if (color) {
            skillButtons[i].style.backgroundColor = color;
        }
    }
}

// Function to filter projects based on selected skills
function filterProjects() {
    const selectedSkills = Array.from(document.getElementsByClassName('skills-button'))
        .filter(button => button.classList.contains('selected'))
        .map(button => button.textContent.trim());

    const projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
        const projectSkills = projects[i].dataset.skills.split(',').map(skill => skill.trim());
        if (selectedSkills.every(skill => projectSkills.includes(skill))) {
            projects[i].style.display = 'block';
        } else {
            projects[i].style.display = 'none';
        }
    }
}

// Add event listeners to skill buttons
const skillButtons = document.getElementsByClassName('skill-button');
console.log(skillButtons.length);
for (let i = 0; i < skillButtons.length; i++) {
    skillButtons[i].addEventListener('click', function() {
        this.classList.toggle('selected');
        filterProjects();
    });
}

function createDropdown() {
    const tableHeaders = document.querySelectorAll('#skillsTable thead th');
    const dropdown = document.getElementById('skillsDropdown');
  
    tableHeaders.forEach(header => {
      const option = document.createElement('option');
      option.value = header.innerText;
      option.textContent = header.innerText;
      dropdown.appendChild(option);
    });
  
    dropdown.addEventListener('change', filterTable);
    
  }
  
  function filterTable() {
    const dropdown = document.getElementById('skillsDropdown');
    const selectedSkill = dropdown.value;
  
    const allCells = document.querySelectorAll('#skillsTable td');
    allCells.forEach(cell => {
      if (cell.getAttribute('name') === selectedSkill) {
        cell.style.display = 'table-cell';
      } else {
        cell.style.display = 'none';
      }
    });
  
    const skillsHead = document.getElementById('skillshead');
    skillsHead.style.display = 'none';
  }
  
  function toggleDropdown() {
    const dropdown = document.getElementById('skillsDropdown');
    const skillsTable = document.getElementById('skillsTable');
    const skillsHead = document.getElementById('skillshead');
    const allCells = document.querySelectorAll('#skillsTable td');

    console.log(window.innerWidth);

    if (window.innerWidth <= 768) {
        filterTable();
        dropdown.classList.remove('hidden');
        dropdown.style.display = 'block';
        skillsTable.classList.add('hidden');
        skillsHead.style.display = 'none';
    } else {
        dropdown.classList.add('hidden');
        dropdown.style.display = 'none';
        skillsTable.classList.remove('hidden');
        skillsHead.style.display = 'table-header-group';
        allCells.forEach(cell => {
        cell.style.display = 'table-cell';
        });
        unfilterProjects(); // Call the unfilterProjects function
    }
}

window.addEventListener('orientationchange', toggleDropdown);
window.addEventListener('load', toggleDropdown);
window.addEventListener('resize', toggleDropdown);



// Function to unfilter projects
function unfilterProjects() {
    const projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = 'block';
    }
}


// Call the functions to set initial skill button colors and filter projects
setSkillButtonColors();
createDropdown();

// Start the typing animation
type();

