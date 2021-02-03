const userInput = document.getElementById('input-number');
const addButton = document.getElementById('btn-add');
const subtrButton = document.getElementById('btn-subtract');
const multButton = document.getElementById('btn-multiply');
const divideButton = document.getElementById('btn-divide');

const finalResults = document.getElementById('result');
const currentCalculation = document.getElementById('CurrentCalculations');

function outputResult(result, text) {
  finalResults.textContent = result;
  currentCalculation.textContent = text;
}