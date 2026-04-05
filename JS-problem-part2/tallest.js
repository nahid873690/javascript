const heights = [65, 66, 68, 72,78,60,65, 66];

function getMax(numbers){
    let max = num;
    for (const num of numbers){
        
        if(num > max){
            max = num;
        }
    }
}
const max = getMax(heights);
console.log('max value is', max);