function barinda(str){
    return arr = str.split(' ')
                    .map((char) => {
                    return char[0].toUpperCase() + char.slice(1);
                    })
                    .join(' ')
                    
    
}
console.log(barinda('barinda system sylvere are all everything'))