// function date() {
//     var time = new Date();
//     document.write(time);
// }
// date();
//  function name() {
//     var user = prompt("Enter your first name :");
//     var last = prompt("Enter your last Name : ");
//     var fullname = user + " " + last ;
//     document.write(fullname);
//  }
//  name();

// function sum() {
//     var num1 = +prompt("enter your first number : ");
//     var num2 = +prompt("enter your last number : ");
//     var sum = num1 + num2;
//     document.write(sum);
// }
// sum();

// function calculator() {
//     var num1 = +prompt("Enter your first number :");
//     var num2 = +prompt("Enter your last number : ");
//     var operator = prompt("Enter Your operation ('+', '-', '*', '/')");
//     var result;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-'){
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/'){
//         if (num1 === '0'){
//             alert("Division By zero is not allowed")
//         } else {
//             result = num1 / num2;
//         }
//     }
//     else {
//         alert("invaild number");
//     }
//     document.write(result);
// }
// calculator();

// function sqr() {
//     var number = +prompt ("Enter your number : ");
//     var final = number * number ;
//     document.write(final);
// }
// sqr();

// function factorial(n) {
//     if (n < 0) return "Factorial for negative numbers is not defined";
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(10));

// function counting (){
//     var usernum1 = +prompt('enter the start counting')
//     var usernum2= + prompt('enter your end counting')
//     for (var i =usernum1; i <=usernum2; i++ ){
//         document.writeln(i)
//     }
// }
