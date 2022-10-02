function jansNotation(array) {

    let rest = [];
    let numbers = [];
    let operators = []


    let operationEnum = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }

    for (let el of array) {
        if (typeof (el) === "number") {
            numbers.push(el)
        } else {
            operators.push(el);
        }
    }

    if (operators.length < numbers.length - 1) {
        console.log("Error: too many operands!")
        return;
    } else if (numbers.length === operators.length || numbers.length === 0) {
        console.log("Error: not enough operands!");
        return;
    }

    for (let el of array) {
        if (typeof (el) === "number") {
            rest.push(el)
            continue;
        }

        let numA = rest.pop();
        let numB = rest.pop();
        let result = operationEnum[el](numB, numA)
        rest.push(result);
    }

    console.log(rest.join());
}

jansNotation(
    [3,
        4,
        '+'])


console.log("-------------------------------")

jansNotation(
    [5,
        3,
        4,
        '*',
        '-']
)