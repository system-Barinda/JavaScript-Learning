function greeting(){
    console.log("hi me I'm good");
}
function sayName(name){
    console.log('my name is :' + name + '! that good');
}
function start(){
    console.log('please wait a little bit of time 5 s......!');
    setTimeout(() => {
        sayName("Barinda system sylvere");
    }, 5000);
}
start();