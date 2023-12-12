let currentInput = '';
let currentOperation = '';
let isResultDisplayed = false;

function appendNumber(number) {
    if (isResultDisplayed) {
        clearDisplay();
        isResultDisplayed = false;
    }
    currentInput += number;
    updateDisplay();
}

function appendOperation(operation) {
    if (currentInput !== '') {
        currentOperation = operation;
        currentInput += ` ${operation} `;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    updateDisplay();
}

function calculate() {
    if (currentInput !== '') {
        try {
            currentInput = eval(currentInput).toString();
            isResultDisplayed = true;
            updateDisplay();
        } catch (error) {
            currentInput = 'Error';
            updateDisplay();
        }
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
