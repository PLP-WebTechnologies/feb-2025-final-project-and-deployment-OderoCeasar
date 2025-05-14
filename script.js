function showVariable() {
  let user = "Alice";
  document.getElementById("output").innerText = `Hello, ${user}! Welcome to JavaScript.`;
}

function checkAnswer(answer) {
  const correct = "const";
  const result = document.getElementById("quiz-result");

  if (answer === correct) {
    result.innerText = "Correct! Use 'const' for constants.";
    result.style.color = "green";
  } else {
    result.innerText = "Incorrect. Try again!";
    result.style.color = "red";
  }
}
