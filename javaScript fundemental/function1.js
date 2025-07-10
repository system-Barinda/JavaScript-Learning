function MakeLine(len){
    let line = '';
    for( let i = 1; i <= len; i++){
        line += '*';
    }
    return line + "\n";
}

function buildTriangle(len){
    let tringle = "";
    let lineNumber1 = 1;
    for( lineNumber1 = 1; lineNumber1 <= len; lineNumber1++){
        tringle = tringle + MakeLine(lineNumber1)
    }
    return tringle;
}
console.log(buildTriangle(10));