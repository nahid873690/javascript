console.log("Explore API");

const person ={
    name:"selim",
    fruit:"dalim",
    friends:["alim","kolim","lamin"],
    isRich : false,
    money: 30000,
};

console.log(person);
// JSON -> JS object with Notation
// JSON.stringify

const personJSON = JSON.stringify(person);
console.log(personJSON,typeof personJSON);

const perseJSON = JSON.parse(personJSON);
// console.log(perseJSON)