let users = {
    greet:function(){
        console.log('the name is :' + this.name,this.age);
    }
};

let newP = Object.create(users, {
    name: {
        value:"alce",
        enumerable:true,
        Writable:true,
    },
    age:{
    value:19,
    writable:true,
    enumerable:true,
    },

});
newP.greet();