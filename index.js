
//Empty variables
let firstValue = "";
let secondValue = "";
let resultValue = "";
let nextOperator = "";
let isClearInput = false;
let defaultValue = "";

//function to create values and current value
function numInputFunction(value) {

    let inputField = document.querySelector(".input");

    //If someOne input a new value after a equation without pressing any operator ,
    // the previous equations result will be clear from the display will not affect the new value.
    if(inputField.value == resultValue && nextOperator == ""){
        inputField.value = "";
        resultValue = ""; 
    }

    if(inputField.value === "0" && value === "."){
        inputField.value != "";
    }else if(inputField.value === "0" && value !== "."){
        inputField.value = "";
    }

    if (nextOperator !== "" && firstValue !== "" && isClearInput) {
        inputField.value = "";
        isClearInput = false;

        if (resultValue) {
            resultValue = ""
        }
    }

    inputField.value += value;
}

//function to create a decimal point
function addDecimal(){
    let inputValue = document.querySelector(".input");
    if(!inputValue.value.includes(".")){
        inputValue.value += ".";
        addDecimal.disabled = true;
    }
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

    //if the equal button is pressed after passing first operand as input,
    // the result will be the same operand that was passed by the user.
    if(value2 && operator == ""){
        result = document.querySelector(".input").value;
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
