function checkLettercount(strr){
    const words = strr.split(' ');

    let highestScore = 0;
    let highestWord = "";

    for(let word of words){
        const score = [...word].reduce((a,b) => {
            return a + (b.charCodeAt(0) - 96);
        },0)
        
    if( score > highestScore){
        highestScore = score;
        highestWord = word;
    }
    }
 return highestWord;
}
console.log(checkLettercount('barinda system sylvere'))