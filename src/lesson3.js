let name1 = 'id,name ,   age;';

console.log(name1.length);
console.log(name1.slice(2,4));
console.log(name1.replace(";",""));
console.log(name1.split(","));
console.log(...name1.split(","));
console.log(name1.trim());
console.log(name1.padEnd(40,"I love Sofia"));
console.log(name1.indexOf(',')); // also we have lastIndexOf()
//toUpperCase, toLowerCase
//concat()
//charAt(2)

let numb = 15.3;
let numb1 = 15.3;

console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));
console.log(Math.pow(numb,3));

let date = new Date();

console.log(date.getHours());

let obj = {

}
let arr = ["Love",4,true,{},obj,null,undefined,[123,15]];

// delete arr[1]
console.log(arr);
arr.length = 3;
console.log(arr.slice(1,3));
arr.push(15);
console.log(...arr);
// arr.pop();
// arr.shift();
// arr.unshift();

let newArr = new Array("Mysha",4,false)

let matrix = [
    [1,2,3],
    [5,7,3],
    [3,4,5]
]

console.log(matrix[0][2])