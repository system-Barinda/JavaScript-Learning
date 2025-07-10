function rev(w){
    var revew = " ";
    for(var i = w.length -1; i >= 0; i--)
    {
        revew = revew.concat(w[i]);
    }
    return revew;
}
console.log(rev('barinda'));

// console.log('Why couldn\'t the shoes go out and play\?\r\
// They were all \"tied" up\!');

// let thingOne = "red";
// let thingTwo = "blue";
// console.log(`${thingOne} ${thingTwo}`);