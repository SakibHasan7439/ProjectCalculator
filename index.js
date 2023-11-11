
function numFunction(value){
    let inputField =  document.querySelector(".input");
    inputField.value += value
}

function addFunction(operator){
    let inputOpr = document.querySelector(".input");
    inputOpr.value += operator;
}

function subFunction(operator){
    let inputOpr = document.querySelector(".input");
    inputOpr.value += operator;

}

function multFunction(operator){
    let inputOpr = document.querySelector(".input");
    inputOpr.value += operator;
}

function divFunction(operator){
    let inputOpr = document.querySelector(".input");
    inputOpr.value += operator;
}

function delFunction(){
    document.getElementById("demo").value = "";
}

function calFunction(){
    let inputField = document.querySelector(".input");
    let expression = inputField.value;
    // inputField.value = eval(expression);

let operands = expression.split(/[-+*/]/);
let operator = expression.match(/[^\d]/);

if(operands.length === 2 && operator){
    let operand1 = parseFloat(operands[0]);
    let operand2 = parseFloat(operands[1]);

    switch(operator[0]) {
        case "+":
            inputField.value = operand1 + operand2;
            break;
        
        case "-":
            inputField.value = operand1 - operand2;
            break;
            
        case "*":
            inputField.value = operand1 - operand2;
            break;

        case "/":
            if(operand2 != 0){
                inputField.value = operand1 / operand2;
            }else{
                inputField.value = "Error"
            }
            break;
        default:
            break;

    }
}


}
    