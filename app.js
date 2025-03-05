function calculate() {
    var a = +prompt("Enter the first number:");
    var b = +prompt("Enter the second number:");
    var operator = prompt("Enter the operator (+, -, *, /):");
    
    var result;
    if (operator === '+') {
        result = a + b;
    } else if (operator === '-') {
        result = a - b;
    } else if (operator === '*') {
        result = a * b;
    } else if (operator === '/') {
        if (b === 0) {
            alert("Error: Division by zero is not allowed.");
            return;
        }
        result = a / b;
    } else {
        alert("Error: Invalid operator. Please enter one of the following: +, -, *, /");
        return;
    } 
    
    alert("Result: " + result);

}

function foo() {
    var getInp = document.getElementById("inp");
    console.log(getInp.value);
}
