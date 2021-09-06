var dataChecked = true;
var num1 = 3/0;
var num2 = -3/0;
var num3 = "abc"/3;
//============
var age = 25;
var year = 2021
//============
var firstName;
var lstName = undefined;

// @ts-ignore
// document.getElementById("demo").innerHTML = (`${dataChecked} ${num1} ${num2} ${num3}`);
// console.log(`${dataChecked} ${num1} ${num2} ${num3}`);
document.getElementById("demo").innerHTML = (`${age} ${year} ${firstName} ${lstName}`);
console.log(`${age} ${year} ${firstName} ${lstName}`);
