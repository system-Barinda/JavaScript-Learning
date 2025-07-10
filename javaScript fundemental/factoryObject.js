function createUser(type){
    if(type === "admin"){
        return {
            role:"admin",
            permission:["read","write","delete","edit"],
        };
    }
    else if(type === " guest"){
        return{
            role:"guest",
            permission:["read"],
        };
    }
    else{
        return{
            role:"users",
            permission:["read","edit","write"],
        };
    }
}
const admin = createUser("admin");
console.log(admin);