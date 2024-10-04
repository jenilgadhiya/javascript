let currentQuiz = 0;
let score = 0;
let quizData = [];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");

function loadQuizData() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      quizData = data; // Store fetched quiz data
      loadQuiz(); // Load the first quiz question
    })
    .catch(() => {
      resultEl.innerText = "Failed to load quiz data."; // Handle fetch error
    });
}

// Display the current quiz question and choices
function loadQuiz() {
  const quizItem = quizData[currentQuiz];
  questionEl.innerText = quizItem.question; // Set the question text

  // Generate choice radio buttons
  choicesEl.innerHTML = quizItem.choices
    .map(
      (choice, index) => `
    <li>
      <input type="radio" name="choice" id="choice${index}" value="${choice}">
      <label for="choice${index}">${choice}</label>
    </li>`
    )
    .join("");

  resultEl.innerText = ""; // Clear previous result message
}

// Submit the selected answer
function submitAnswer() {
  const selected = document.querySelector('input[name="choice"]:checked'); // Get selected choice
  if (!selected) {
    resultEl.innerText = "Please select an answer!"; // Alert if no answer is selected
    return;
  }

  // Check if the selected answer is correct
  if (selected.value === quizData[currentQuiz].correct) {
    score++; // Increment score for correct answer
    selected.nextElementSibling.style.color = "green"; // Highlight correct answer
  } else {
    selected.nextElementSibling.style.color = "red"; // Highlight incorrect answer
  }

  disableChoices(); // Disable choices after submission

  // Move to next question or display score
  currentQuiz++;
  setTimeout(currentQuiz < quizData.length ? loadQuiz : displayScore, 1000);
}

// Disable choice options after submitting the answer
function disableChoices() {
  document.querySelectorAll('input[name="choice"]').forEach((choice) => {
    choice.disabled = true; // Disable all choices
  });
}

// Display the final score at the end of the quiz
function displayScore() {
  questionEl.innerText = "Quiz Completed!";
  choicesEl.innerHTML = ""; // Clear choices
  resultEl.innerText = `Your Score: ${score}/${quizData.length}`; // Show score
  document.getElementById("submit").style.display = "none"; // Hide submit button
}

// Add a new question to the quiz
function addQuestion(event) {
  event.preventDefault(); // Prevent default form submission

  // Create a new question object from input values
  const newQuestion = {
    question: document.getElementById("newQuestion").value,
    choices: [
      document.getElementById("newChoice1").value,
      document.getElementById("newChoice2").value,
      document.getElementById("newChoice3").value,
      document.getElementById("newChoice4").value,
    ],
    correct: document.getElementById("correctAnswer").value,
  };

  // Post the new question to the API
  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newQuestion),
  })
    .then(() => {
      alert("Question added!"); // Alert success
      document.getElementById("addQuestionForm").reset(); // Reset the form
      loadQuizData(); // Reload quiz data to include new question
    })
    .catch(() => alert("Failed to add question")); // Alert error
}

// Event listener for the form submission
document.getElementById("addQuestionForm").addEventListener("submit", addQuestion);

// Initial load of quiz data
loadQuizData();
