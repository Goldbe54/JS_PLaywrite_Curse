let depart = "QA";
let mysha = "Hello Mysha";
let palindrom = "radar";
let numbers = [5,4,7,6,10,2,9]

function stringReverse(str) {
    return str.split('').reverse().join('');
}

function isPalindrom(str) {
    reversed = str.split('').reverse().join('');
    if(str==reversed){
        return true;
    }
    return false;
}

function getPaired(arr) {
    var pairedNum = [];

    for(var i = 0; i < arr.length; i++){
        if((arr[i] % 2) === 0) {
            pairedNum.push(arr[i]);
        }
    }
    
    var reversedPaired = pairedNum.reverse();

    return reversedPaired
}

function getPairedWithoutLoop(arr) {
    var pairedNum = arr.filter(function(num) {
        return num % 2 === 0;
      });
    
    var reversedPaired = pairedNum.reverse();

    return reversedPaired
}

console.log(stringReverse(depart));
console.log(stringReverse(mysha));
console.log(isPalindrom(mysha));
console.log(isPalindrom(palindrom));
console.log(getPaired(numbers));
console.log(getPairedWithoutLoop(numbers));