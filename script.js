function sum(a, b) { return a + b }

function subtract(a, b) { return a - b }

function multiply(a, b) { return a * b }

function divide(a, b) { return a / b }

let displayValue = "0";

const display = document.querySelector("#display");
display.textContent = displayValue;



function returnParsedExpression(expression) {
    return /^(?<numberA>\d{0,})(?<operation>[+-/*]{0,1})(?<numberB>\d{0,})$/g.exec(expression).groups
}

function returnCalculationState(expression) {
    expression = returnParsedExpression(expression);
    if (expression.operation == "") {
        return "hasA"
    }
    if (expression.numberB == "") {
        return "hasOp"
    }
    return "hasB"
}

function doOperation(expression) {
    expression = returnParsedExpression(expression);
    const operation = expression.operation;
    let numbers = [expression.numberA, expression.numberB];
    numbers = numbers.map(number => parseFloat(number));
    const operate = {
        "+": sum(...numbers),
        "-": subtract(...numbers),
        "*": multiply(...numbers),
        "/": divide(...numbers),
    }

    const result = operate[operation];
    return result
}