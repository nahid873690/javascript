function wordFrequency(sentence) {
    let words = sentence.split(" ");

    let wordsCount = {};
    //  console.log(words)
    for (let word of words) {
        //  console.log(word);

        if (wordsCount.hasOwnProperty(word)) {
            // wordsCount[word] = wordsCount[word]+ 1'
            // wordsCount[word] += 1;
            wordsCount[word]++;
        }
        else {
            wordsCount[word] = 1;
        }

    }
    return wordsCount;
}
let output = wordFrequency("I love JS and I love coding and JS is fun");
console.log(output);