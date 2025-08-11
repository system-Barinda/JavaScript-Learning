class myMessage extends Error {
    constructor(message){
        super(message);
        this.name = "mymessage";
    }
}


function render(shape){
    if(typeof shape.draw === "function"){
        shape.draw();
    }
    else{
        throw new myMessage("This Object can't be in ob drawn")
        
    }
}




const circle = {
    draw:() => console.log("Drawing the a circle (duck type)"),
};
const square = {
    draw:() => console.log(`the Drawing the a square (durk typed)`),
}

render(Barinda)