function displayNumber(num){
    // let resultBox=document.querySelector("#inputBox")
   inputBox.value+=num
}

function clearBox(){
    inputBox.value=""
}

function evaluateExpression(){
    let expr=inputBox.value;
    let result=eval(expr)
    inputBox.value=result
}