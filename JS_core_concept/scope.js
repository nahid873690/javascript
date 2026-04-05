let pi= 3.1416;
add (2,5);

function add(a, b){
    const factor = 0.5;
    const result = (a+ b) * factor + pi;
    const total = doubleIt(result);
    const value = addTwo(total);
    function addTwo(total){
        return num + 2;
    }
    return total;
}
function doubleIt(num){
    return num * 2;
}
add(5, 10);
console.log(factor, pi);