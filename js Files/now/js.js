function barinda (text)
{
    let dectionary = 
    {
        "barnd":"barinda",
        "gry":"grey",
        "sytm":"system"
    };
    return text.split(' ').map(word => dectionary[word] || word).join(' ');
}
let system = "barnd sytm is gry";
console.log(barinda(system));