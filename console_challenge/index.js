let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let op = prompt("Enter operation (+, -, *, /, %)");

if(op === "+"){
    console.log("Result:", num1 + num2);
}
else if(op === "-"){
    console.log("Result:", num1 - num2);
}
else if(op === "*"){
    console.log("Result:", num1 * num2);
}
else if(op === "/"){
    console.log("Result:", num1 / num2);
}
else if(op === "%"){
    console.log("Result:", num1 % num2);
}
else{
    console.log("Invalid operation");
}