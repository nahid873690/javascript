function gonoVote(array) {
    
    let count = 0;
    for ( const ch of gonoVote){
        if( ch !== " " &&! isWord){
            count++;
            isWord = "true"
        }
        else if(ch == " "){
            isWord = "false"
        }
    }
    

}
console.log(count)