document.getElementsByTagName("h1")[0].style.fontSize = "6vw";let currentInput = "";
let previousInput = "";
let operator = "";

const display = document.getElementById("display");

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("0で割ることはできません");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}
