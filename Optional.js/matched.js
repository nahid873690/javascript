const numbers = [ 45, 65, 23, 98, 19];

// for(let i= 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }
// for ( const number of numbers){
//     console.log(number)
// }

const products = [
    { id: 1, name: 'xiami phone One night', price: 190000},
    { id : 2, name: 'iphone ', price: 190000},
    { id: 3, name: 'mac bookair' , price: 120000},
    {id: 4, name: 'lenovo yoga laptop', price: 19000},
    { id:5, name: 'Dell inspiron laptop 2025', price: 190000},
    {id:6, name: 'Samsung phone note 7', price: 19000},
    {id: 7, name: 'Nokia old age phone gone ', price: 13000},
    {id: 8, name:'Nokia old age phone gone', price: 20000},
];
//  for( const product of products){
//     console.log(product);
//  }

// function matchedProducts (products, search){
//     for(const product of products){
//         console.log(product)
//     }
// }
// const result = matchedProducts(products, 'phone');
// console.log(result);

function matchedProducts ( products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);