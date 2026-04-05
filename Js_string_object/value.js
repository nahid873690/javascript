const person = {
    name: 'soder uddin',
    age:25,
    profession: 'developer',
    salary :25000,
    married : true
}
person.salary = 30000;
person['age'] = 26;
person['fav places '] = ['maldives', 'bali','pataya']
const propName = 'profession';
person[propName] = 'devops'
console.log(person)