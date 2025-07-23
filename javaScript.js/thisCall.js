let great = {
    names : "barinda",
    age:23,
    getDetail:function (){
        console.log(`the name:${this.names} and age:${this.age}`);
    },
};
let system = {
    names:"barinda system sylvere",
    age:50,
};
great.getDetail();
 let v =great.getDetail.bind(system);
let b =  great.getDetail.bind(system)
b()
v()
