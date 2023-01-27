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
      break;
    case "-":
      return subtract(a, b);
      break;
    case "X":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return "Math error";
  }
};

// Full operation
const performCalculation = () => {};

// Add event listeners to display key contents when clicked
const addKeys = () => {
  const test = document.querySelector("#equal");
  console.log(test.classList.contains("op"));

  const keys = document.querySelectorAll(".key");
  console.log(keys);
  keys.forEach((key) => {
    if (key.classList.contains("op")) {
      key.addEventListener("click", () => {
        if (firstNumber != 0) {
          console.log(true);
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
    } else if (key.classList.contains("clear")) {
      key.addEventListener("click", () => {
        op = "";
        firstNumber = 0;
        secondNumber = 0;
        currentDisplay = 0;
        totalDisplay = "";
        document.querySelector(".total-display").textContent = totalDisplay;
        document.querySelector(".current-display").textContent = currentDisplay;
      });
    } else if (key.classList.contains("equal")) {
      key.addEventListener("click", () => {
        secondNumber = document.querySelector(".current-display").textContent;
        let results = operation(op, Number(firstNumber), Number(secondNumber));
        document.querySelector(".current-display").textContent = results;
        op = "";
        firstNumber = 0;
        secondNumber = 0;
        currentDisplay = 0;
        totalDisplay = "";
        document.querySelector(".total-display").textContent = totalDisplay;
      });
    } else {
      key.addEventListener("click", () => {
        if (currentDisplay == 0) {
          currentDisplay = "";
        }
        currentDisplay += key.children[0].textContent;
        console.log(currentDisplay);
        document.querySelector(".current-display").textContent = currentDisplay;
      });
    }
  });
};

addKeys();
