
//Empty variables
let currentValue = "";
let totalValue = "";
let operator = "";

//function to create values and current value
function numFunction(value){
    let inputField =  document.querySelector(".input");
    if(operator !== "" && totalValue !== ""){
        inputField.value = "";
        console.log(currentValue);
    }

    inputField.value += value;
    currentValue = inputField.value;
}

//function to convert the current value into first value and set the operator
function storeFirstValue(opr){
    if(currentValue !== ""){
        operator = opr;
        totalValue = currentValue;
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
            result = parseFloat(totalValue) + parseFloat(currentValue);
            break;
        
        case "-":
            result = parseFloat(totalValue) - parseFloat(currentValue);
            break;

        case "*":
            result = parseFloat(totalValue) * parseFloat(currentValue);
            break;

        case "/":
            if(totalValue == 0){
                result = "Zero divison error";
            }else{
                result = parseFloat(totalValue) / parseFloat(currentValue);
            }

            break;
        default:
            break;
    }
    
    document.querySelector(".input").value = Math.round(result * 100)/100;
    operator = "";
    totalValue = "";
}
