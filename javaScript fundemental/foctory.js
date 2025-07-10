function barinda(name,age){
    return {name,
            age,
            greeting(){
                console.log(` hello my name is ${name} and age ${age}`);
            }
}
}
const bari = new barinda("barinda system sylvere",20);
bari.greeting();
const bari1 = new barinda("iradukunda sandrine",30);
bari1.greeting();