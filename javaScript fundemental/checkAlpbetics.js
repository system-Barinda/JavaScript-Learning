function checkAlpbetic(text){
return text.toLowerCase()
            .split("")
            .filter(char => char >= 'a' && char <= 'z')
            .map(char => char.charCodeAt(0) - 96)
            .join(' ');
}
console.log(checkAlpbetic("barinda"));