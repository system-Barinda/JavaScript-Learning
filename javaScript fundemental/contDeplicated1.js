function duplicateCount(text){
    let count = {};
    let deplicated = {};

    for(let letter of text){
        count[letter] = (count[letter] || 0) + 1 ;
    }
    
    for(let letter in count){
        if(count[letter] > 1){
            deplicated[letter] = count[letter];
        }
    }
    return deplicated;
}
console.log(duplicateCount("barindaa"));