let firstName = "Diego";

console.log(firstName);

let myArray = [1,2,3,4];

let x = 10;
if (x == 10){
    console.log("x ir lielāks pa 10")
}

let person = {
 name: Diego,
 age: 20,
}
console.log(person.age); //dot notation
console.log(person["name"]); //bracket notation

let attribute = "age";
console.log(person[attribute]);

person.vecums = 16;
console.log(person);


let ageStatus = (person.age >= 18) ? "Pilgadīgs" : "Nepilngadīgs";
console.log(ageStatus);

let namesArray = ["Ara", "Digs", "Lico", "Choc"]
//the index are 0, 1, 2, 3
namesArray = [2]

for(let i = 0; i <= namesArray.length; i++){S
    console.log(namesArray[i]);
}


