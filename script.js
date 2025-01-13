let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
  updateDisplay();
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (operator === null || currentInput === '') return;
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);

  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = b !== 0 ? a / b : 'Error';
      break;
    default:
      return;
  }

  currentInput = result;
  operator = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

// Keyboard Support
document.addEventListener('keydown', (e) => {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (['+', '-', '*', '/'].includes(e.key)) setOperator(e.key);
  if (e.key === 'Enter') calculate();
  if (e.key === 'Backspace') clearDisplay();
  if (e.key === '.') appendNumber('.');
});
