let map  = new Map()
map.set("name","Vadim")
map.set("job","QA")
map.set("age","42")
map.delete("age") // also can use set()

console.log(map)
console.log(map.get("name"))
console.log(map.keys()) // also can be values

let set = new Set();

set.add("Vadim")
set.add("Ilya")
set.add("Vadim")
console.log(set)

//While Loop

let i = 0;

while(i<3){
    console.log("I love Sonia");
    i++;
}

//Do While Loop

do{
    console.log("In do while")
    i++             //break; - out of cycle
}while(i<5)         //continue; - skip 1 iteration

//for

for(let i=0;i<5;i=i+1){
    console.log(i)
}

//for each
let numbers = [5,15,6,7,2];

for(let number of numbers){
    console.log(number);
}