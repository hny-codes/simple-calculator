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
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return "Math error";
  }
};
