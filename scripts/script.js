document.getElementById('year').appendChild(document.createTextNode(new Date().getFullYear()));

const defaultResultValue = 0;
let currentResult = defaultResultValue;

let storedResults = [];

function getUserInputNumber() {
  return parseInt(userInput.value);
}

function saveResults(operation, operationResult, x, y) {
  let result = {
    operation: operation,
    result: operationResult,
    number:  x,
    operand: y
  }
  storedResults.push(result);
  console.log(storedResults);
}

function calculate(operation, operator) {
  const defRes = currentResult;
  let userInput = getUserInputNumber();
  let outputCalculations = `${defRes} ${operator} ${userInput}`;
  switch(operation) {
    case "Add": 
    currentResult += userInput;
    break;
    case "Subtract": 
    currentResult -= userInput;
    break;
    case "Divide": 
    if(userInput != 0) {
      currentResult /= userInput;
    } else {
      currentResult = 0;
    }
    break;
    case "Multiply": 
    currentResult *= userInput;
    break;
  }
  saveResults(operation, currentResult, userInput, defRes);
  outputResult(currentResult, outputCalculations);
}

function add() {
  calculate("Add", "+");
}

function subtract() {
  calculate("Subtract", "-");
}
function multiply() {
  calculate("Multiply", "*");
}
function divide() {
  calculate("Divide", "/");
}

addButton.addEventListener("click", add);
subtrButton.addEventListener("click", subtract);
multButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);