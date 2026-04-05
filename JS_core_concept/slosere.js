// function outerFunction(){
//     function innerFunction(){
//         console.log('This is the inner function');
//     }
//     return innerFunction;
// }
// const output = outerFunction();

// 
function counter (){
    let count = 0;
    function increment(){
        count = count +1;
        console.log('value of count', count);
    }
    return increment;
}
const count1 = counter();
count1();
count1()
count1()