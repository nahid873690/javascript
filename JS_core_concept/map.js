// const numbers = [1,2,3,4,5];

// const doubled =[];
// for(const num of numbers){
//     doubled.push(num* 2);
// }
// console.log(doubled)

const doubled = Numbers.map(num => num *2);
const squared = numbers.map(num => num * num);

const products = [
    {name:'laptop', price:4500},
    {name:'phone', price:15000},
    {name:'tablet', price:25000},
];

const friends = ['zaved', 'naved','khaled', 'sajed'];
const firstLetters = friends.map(frd => frd[0]);
console.log(firstLetters)

const names = products.map(pd => {
    const upperCaseName = pd.name.toUpperCase();
    return upperCaseName;
})
console.log(names)