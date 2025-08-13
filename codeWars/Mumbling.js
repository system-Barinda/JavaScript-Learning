function accum(s) {
	const ch = s.split("");
    let result = [];
    let count = 1;

    for(let i = 0; i < ch.length; i++){
        result.push(s[i].repeat(count));
        count++;
    }
    return result.map((el) => {
        return el.charAt(0).toUpperCase() + el.slice(1)
    }).join('-');
}
let b = "abcd";
console.log(accum(b))
