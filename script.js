function sum(a, b) { return a + b }

function subtract(a, b) { return a - b }

function multiply(a, b) { return a * b }

function divide(a, b) { return a / b }



function returnParsedExpression(expression) {
    return /^(?<numberA>\d{1,}).(?<operation>[+-/*]{1}).(?<numberB>\d+)$/g.exec(expression).groups
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