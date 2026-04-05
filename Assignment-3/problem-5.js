function analyzeText(str) {
    let longwords = str.split (" ");
    let wordCount ={};
    for( let longword of  longwords){
        // console.log(longword);
        if(wordCount.hasOwnProperty(longword)){
            wordsCount[longword]++;
        }
        else{
            wordCount[longword] = 1;
        }
    }
    return wordCount;
}
let output = analyzeText("I am a little honest person")
console.log(output);