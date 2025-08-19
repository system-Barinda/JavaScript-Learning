function system(text){
    const pairs = {'A':'T','T':'A','C':'G','G':'C'};
    return text.split('').map((c) => pairs[c]).join('')
    
}
console.log(system('TTTTC'))