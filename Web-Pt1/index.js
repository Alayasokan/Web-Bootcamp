document.getElementById("num1").value = 0;
document.getElementById("num2").value = 0;

function addition() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var sum = parseInt(number1) + parseInt(number2);
    document.getElementById("sum").innerHTML = "Result = " + sum;
}

function subraction() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var sum = parseInt(number1) - parseInt(number2);
    document.getElementById("sum").innerHTML = "Result = " + sum;
}

function multiplication() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var sum = parseInt(number1) * parseInt(number2);
    document.getElementById("sum").innerHTML = "Result = " + sum;
}

function division() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var sum = parseInt(number1) / parseInt(number2);
    document.getElementById("sum").innerHTML = "Result = " + sum;
}