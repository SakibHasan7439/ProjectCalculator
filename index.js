
//Empty variables
let currentValue = "";
let firstValue = "";
let operator = "";

//function to create the values and the current value
function numFunction(value){
    let inputField =  document.querySelector(".input");
    inputField.value += value
    currentValue = inputField.value;
}

//function to convert the current value into first value and set the operator
function storeFirstValue(opr){
    if(currentValue !== ""){
        operator = opr;
        firstValue = currentValue;
        console.log(firstValue)
        //problem
        currentValue = "";
        updateDisplay()
    }

}

//function to clear the input field 
function delFunction(){
    document.getElementById("demo").value = "";
}

//function to calculate the values
function calFunction(){
    let result;
    switch(operator){
        case "+":
            result = parseFloat(firstValue) + parseFloat(currentValue);
            break;

        case "-":
            result = parseFloat(firstValue) - parseFloat(currentValue);
            break;

        case "*":
            result = parseFloat(firstValue) * parseFloat(currentValue);
            break;

        case "/":
            if(firstValue == 0){
                result = "Zero divison error";
            }else{
                result = parseFloat(firstValue) / parseFloat(currentValue);
            }

            break;
        default:
            break;
    }
    document.querySelector(".input").value = Math.round(result * 100)/100;
    operator = "";
    firstValue = "";
}
function updateDisplay(){
    document.querySelector(".input").value = currentValue;
}