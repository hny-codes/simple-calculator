// Constants
let totalDisplay = document.querySelector(".total-display").textContent;
let currentDisplay = document.querySelector(".current-display").textContent;

let firstNumber = 0;
let secondNumber = 0;
let op = "";

// Add operation
const add = (a, b) => {
  return a + b;
};

// Subtract operation
const subtract = (a, b) => {
  return a - b;
};

// Multiplication operation
const multiply = (a, b) => {
  return a * b;
};

// Division operation
const divide = (a, b) => {
  return b === 0 ? "Math error" : a / b;
};

// Choose operation
const operation = (op, a, b) => {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "X":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Math error";
  }
};

// Clear function
const clearAll = () => {
  op = "";
  firstNumber = 0;
  secondNumber = 0;
  currentDisplay = 0;
  totalDisplay = "";
};

// Add event listeners to display key contents when clicked
const addKeys = () => {
  const keys = document.querySelectorAll(".key");

  // Iterate each key
  keys.forEach((key) => {
    // Operation key
    if (key.classList.contains("op")) {
      key.addEventListener("click", () => {
        if (firstNumber != 0) {
          secondNumber = document.querySelector(".current-display").textContent;
          let results = operation(
            op,
            Number(firstNumber),
            Number(secondNumber)
          );
          firstNumber = results;
          op = key.children[0].textContent;
          totalDisplay = firstNumber + op;
          currentDisplay = "";
          document.querySelector(".total-display").textContent = totalDisplay;
        } else {
          op = key.children[0].textContent;
          firstNumber = currentDisplay;
          currentDisplay = "";
          totalDisplay = firstNumber + op;
          document.querySelector(".total-display").textContent = totalDisplay;
        }
      });
    }
    // Clear key
    else if (key.classList.contains("clear")) {
      key.addEventListener("click", () => {
        clearAll();
        document.querySelector(".total-display").textContent = totalDisplay;
        document.querySelector(".current-display").textContent = currentDisplay;
      });
    }
    // Equals key
    else if (key.classList.contains("equal")) {
      key.addEventListener("click", () => {
        secondNumber = document.querySelector(".current-display").textContent;
        let results = operation(op, Number(firstNumber), Number(secondNumber));
        document.querySelector(".current-display").textContent = results;
        clearAll();
        document.querySelector(".total-display").textContent = totalDisplay;
      });
    }
    // Numbers key
    else {
      key.addEventListener("click", () => {
        if (currentDisplay == 0) {
          currentDisplay = "";
        }
        currentDisplay += key.children[0].textContent;
        document.querySelector(".current-display").textContent = currentDisplay;
      });
    }
  });
};

addKeys();
