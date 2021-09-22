// Advanced

// Exercise 1
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

// convert to strings to numbers
var cNum = Number(c);
var dNum = Number(d);

const sum = a + b + cNum + dNum + e;
console.log(sum);

var f = '1';
var g = 15;
var h = 8;
var i = "1"

var fNum = Number(f);
var iNum = Number(i);

const product = fNum * g * h * iNum;
console.log(product);

document.getElementById("demo").innerHTML = "The result is " + product / sum + " since product = " + product + " and sum = " + sum;

//  Exercise 2
const numbers = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3]];
let result = [];
result.push(numbers[1][1]);
result.push(numbers[4][2]);
result.push(numbers[5][3]);
result.push(numbers[2][3]);
result.push(numbers[2][1]);
console.log(result);


document.getElementById("demo2").innerHTML = "The new array contains " + result[0] + " " + result[1] + " " + result[2] + " " + result[3] + " " + result[4];