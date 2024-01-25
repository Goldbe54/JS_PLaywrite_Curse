let myAge = 18;
let myName = "Dima";
let myDepartment = "QA";

function canSmokeStandart(age) {
    if(age >= 18) {
        console.log("You can smoke");
        return;
    }
    console.log("You can't smoke")
}

let canSmokeVar = function(age) {
    if(age >= 18) {
        console.log("You can smoke");
        return;
    }
    console.log("You can't smoke")
}

let canSmokeArrow = (age) => {
    if(age >= 18) {
        console.log("You can smoke");
        return;
    }
    console.log("You can't smoke")
}

function allowedToIn(name, age, department){
    if(name == "Dima" && age >= 18 && department == "QA"){
        console.log("You can come in");
        return;
    }
    console.log(`Go away, ${name}!!!`)
}

canSmokeStandart(myAge);
canSmokeStandart(myAge-1);
canSmokeVar(myAge);
canSmokeVar(myAge-1);
canSmokeArrow(myAge);
canSmokeArrow(myAge-1);
allowedToIn(myName,myAge,myDepartment);
allowedToIn("Vitia",myAge,myDepartment);
allowedToIn(myName,15,myDepartment);