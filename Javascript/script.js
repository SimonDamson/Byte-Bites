// Add event listener to the navigation menu
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Add smooth scrolling effect
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});
// Add event listener to the snack box options
document.addEventListener("DOMContentLoaded", () => {
  const snackBoxOptions = document.querySelectorAll(".snack-box-option");
  snackBoxOptions.forEach(option => {
    option.addEventListener("click", () => {
      // Add active class to selected option
      snackBoxOptions.forEach(opt => opt.classList.remove("active"));
      option.classList.add("active");
    });
  });
});
// Add event listener to the quiz submit button
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", () => {
    // Get user answers and display snack recommendations
    const userAnswers = getUserAnswers();
    displaySnackRecommendations(userAnswers);
  });
});

// Function to get user answers
function getUserAnswers() {
  const userAnswers = [];
  const quizQuestions = document.querySelectorAll(".quiz-question");
  quizQuestions.forEach(question => {
    const selectedAnswer = question.querySelector("input[type='radio']:checked");
    if (selectedAnswer) {
      userAnswers.push(selectedAnswer.value);
    }
  });
  return userAnswers;
}

// Function to display snack recommendations
function displaySnackRecommendations(userAnswers) {
  const snackContainer = document.getElementById("snack-container");
  const dietaryPreference = userAnswers[0];
  const snackType = userAnswers[1];
  const recommendedSnacks = getRecommendedSnacks(dietaryPreference, snackType);
  snackContainer.innerHTML = `
    <h2>Recommended Snacks:</h2>
    <ul>
      ${recommendedSnacks.map(snack => `
        <li>${snack}</li>
      `).join("")}
    </ul>
  `;
}

// Function to get recommended snacks
function getRecommendedSnacks(dietaryPreference, snackType) {
  // Return recommended snacks based on dietary preference and snack type
  // This function is not implemented in this example
}
// Get the form elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Add event listener to the form submit button
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Validate form fields
  if (nameInput.value === '') {
    alert('Please enter your name');
    return;
  }
  
  if (emailInput.value === '') {
    alert('Please enter your email');
    return;
  }
  
  if (messageInput.value === '') {
    alert('Please enter a message');
    return;
  }
  
  // If form is valid, submit it
  form.submit();
});