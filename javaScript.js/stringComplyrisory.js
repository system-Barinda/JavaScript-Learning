function barinda(sentence){
    if(sentence.length === 0)return " ";

    let result = " ";
    let count = 1;
    for(let i = 1; i < sentence.length; i++){
        if(sentence[i] === sentence[i - 1]){
            count++;
        }
        else{
            result += sentence[i - 1] + count;
            count = 1;
        }
    }
    return result;
}
console.log(barinda("AAAABBBCCDAA"));