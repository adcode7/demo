document.addEventListener('DOMContentLoaded', function() {
    const output = document.querySelector('.calculator__output');
    const keys = document.querySelectorAll('.calculator__key');
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetInput = false;

    // Update the calculator display
    function updateDisplay() {
        output.textContent = currentInput;
    }

    // Handle number inputs
    function inputNumber(number) {
        if (currentInput === '0' || resetInput) {
            currentInput = number;
            resetInput = false;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    // Handle decimal input
    function inputDecimal() {
        if (resetInput) {
            currentInput = '0.';
            resetInput = false;
            updateDisplay();
            return;
        }
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    }

    // Handle operator inputs
    function inputOperator(op) {
        if (operation && !resetInput) {
            compute();
        }
        previousInput = currentInput;
        operation = op;
        resetInput = true;
    }

    // Compute the result
    function compute() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operation = null;
        updateDisplay();
    }

    // Clear the calculator
    function clear() {
        currentInput = '0';
        previousInput = '';
        operation = null;
        updateDisplay();
    }

    // Add event listeners to all keys
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const value = key.textContent;

            if (value >= '0' && value <= '9') {
                inputNumber(value);
            } else if (value === '.') {
                inputDecimal();
            } else if (value === 'AC') {
                clear();
            } else if (value === '=') {
                compute();
            } else {
                inputOperator(value);
            }
        });
    });

    // Initialize the display
    updateDisplay();
});