
function numFunction(value){
    let inputField =  document.querySelector(".input");
    inputField.value += value
}

function addFunction(operator){
    let inputField = document.querySelector(".input");
    inputField.value += operator;
}

function subFunction(operator){
    let inputField = document.querySelector(".input");
    inputField.value += operator;

}

function multFunction(operator){
    let inputField = document.querySelector(".input");
    inputField.value += operator;
}

function divFunction(operator){
    let inputField = document.querySelector(".input");
    inputField.value += operator;
}

function delFunction(){
    document.getElementById("demo").value = "";
}

function calFunction(){
    let inputField = document.querySelector(".input");
    let expression = inputField.value;
    inputField.value = eval(expression);

}
    