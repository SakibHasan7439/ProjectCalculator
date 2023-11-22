
//Empty variables
let firstValue = "";
let secondValue = "";
let resultValue = "";
let nextOperator = "";
let defaultValue = "";

//Confusion about flag
let isClearInput = false;

//function to create values and current value
function numInputFunction(value) {

    if(document.querySelector(".input").value == defaultValue){
        document.querySelector(".input").value = "";
    }

    document.querySelector(".input").removeAttribute("value");

    let inputField = document.querySelector(".input");

    if (nextOperator !== "" && firstValue !== "" && isClearInput) {
        inputField.value = "";
        isClearInput = false;

        if (resultValue) {
            resultValue = ""
        }
    }

    inputField.value += value;
}

//function to convert the current value into first value and set the operator
function storeFirstValue(operator) {
    let inputField = document.querySelector(".input");
    let currentOperator = nextOperator;
    let isConsicutive = firstValue && inputField.value !== "";

    if (resultValue !== "") {
        firstValue = resultValue;
    } else {
        if (isConsicutive) {
            resultValue = calculate(firstValue, inputField.value, currentOperator);
            document.querySelector(".input").value = resultValue;

            firstValue = resultValue;
            secondValue = "";
            resultValue = "";
        } else {
            firstValue = inputField.value;
        }
    }

    nextOperator = operator;
    isClearInput = true;
}

//function to clear the input field 
function clearInputFunction() {

    defaultValue = 0;
    document.querySelector("input").value = defaultValue;
    firstValue = "";
    secondValue = "";
    resultValue = "";
    nextOperator = "";
    isClearInput = false;
}

//function to calculate the values
function calFunction() {
    resultValue = calculate(firstValue, document.querySelector(".input").value, nextOperator);
    document.querySelector(".input").value = resultValue;

    nextOperator = "";
    firstValue = "";
    secondValue = "";
}

function calculate(value1, value2, operator) {
    let result;
    let errorText = "";

    if(value2 && operator == ""){
        result = value1;
    }

    switch (operator) {
        case "+":
            result = parseFloat(value1) + parseFloat(value2);
            break;

        case "-":
            result = parseFloat(value1) - parseFloat(value2);
            break;

        case "*":
            result = parseFloat(value1) * parseFloat(value2);
            break;

        case "/":
            if (value1 == 0) {
                errorText = "Zero divison error";
                result = errorText;

            } else {
                result = parseFloat(value1) / parseFloat(value2);
            }
            break;

        case "%":
            result = parseFloat(value1) % parseFloat(value2);
            break;

        default:
            break;
    }

    if (errorText === "") {
        result = Math.round(result * 100) / 100;
    }

    return result;    

}
