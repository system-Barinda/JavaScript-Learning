let facebookProfile = {
    name:"barinda system sylvere",
    messages:[],
    freind:0,
    addd: function postMessage(mess){
        
            facebookProfile.messages.unshift(mess);
        },
     remov:function deleteMessage(index){
           facebookProfile.messages.splice(index,1);
        
     },
    feindAdd: function addFriend(){
           return facebookProfile.freind += 1;
    },
    remFreind:function removeFriend(){
        return facebookProfile.freind -= 1;
    }

}
facebookProfile.feindAdd();
facebookProfile.feindAdd();
facebookProfile.feindAdd();
facebookProfile.feindAdd();
facebookProfile.feindAdd();
facebookProfile.remFreind();
console.log(facebookProfile);

// let barinda = [20,30,40,50,60];
// let infff = 3;
// let result = barinda.filter((_,ind) => ind !== infff);

// console.table(result);