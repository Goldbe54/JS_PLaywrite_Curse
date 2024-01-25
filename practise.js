num = 45;
console.log(typeof num);
bint = 45n;
console.log(typeof bint);
str = "Hi-hi"
console.log(typeof str);
sym = Symbol("f")
console.log(typeof sym);
console.log(typeof true);
console.log(typeof undefined);
m = null;
console.log(typeof m);

console.log(num == bint);
console.log(str == sym);

console.log(num === bint);
console.log(str === sym);