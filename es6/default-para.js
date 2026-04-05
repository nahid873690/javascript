function add(num1, num2){
    const total = num1 + num2;
    console.log(num1, num2, total);
}
// add(10,20);

function add2 ( num1, num2=0){
    const total = num1+ num2;
    console.log(num1, num2, total)
}
// add2(10,20)

function fullName(first, last){
    const name = first+ ' ' + last ;
    console.log(name);
}
// fullName('kamruzzaman','k');
function fullName(first, last = ''){
    const name = first + ' '+last;
    console.log(name);
}
// fullName('kamruzzaman', 'Osman');

function multiply (num1, num2=1){
    const result = num1* num2;
    console.log(result);
}
multiply(10,20)