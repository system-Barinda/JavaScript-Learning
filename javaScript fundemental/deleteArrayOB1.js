function deleteusers(user){
   let users = ["barinda","ange","greate","red","white","black","drill","king","gambira"];
   let userDeleted = [];
   let upd = users.filter( person => {
       if(person === user){
        userDeleted.push(user);
        return false;
       }
       return true;
   });

   console.log("user are deleted !.........");
   console.table(userDeleted);
   console.log("the users are remaing!.......");
   console.table(upd);
};
deleteusers("ange");