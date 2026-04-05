const person = {
    name: 'soder uddin',
    age:25,
    profession: 'developer',
    salary :25000,
    married : true
}
// console.log(person)
// dot notation
// dot symbol diya object er  property er value access korar
// console.log(person.profession)
const income = person.salary;
// console.log(income)

// bracket Notation
// third bracket diya access kora
// console.log(person['age'])
const boyos = person['age']
// console.log(boyos)

const keyName = 'profession';
console.log(person[keyName])