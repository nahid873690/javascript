/**
 * TERNARY --> three parts
 * 
 *   ?  :
 * condition ? do something when true : do something when false
 */
// const age = 12;

// age >= 18 ? console.log('Vote Dio') : console.log('Ghumai thako')

// 2
// let price = 500;
// const isLeader = true;

// if(isLeader === true){
//     price = 0;
// }
// else {
//     price = price +100;
// }
// console.log(price)
// 3
// price = isLeader === true ? 0 : price + 100;

// OPTIONAL : semi-advanced ternary

if(isLeader === true){
    if(price > 1000){
        price = price /2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}
// feel free to ignore this one 
price = isLeader === true ? price > 1000 ? price /2 : 0: price + 1000;
price - isLeader === true ?
          price > 1000 ?
             price /2 : 0
        : price + 1000;