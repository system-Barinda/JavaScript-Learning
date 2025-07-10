function deleteUsers(user){
    let users = ["barinda","system","sylvere","greate","beath","ishimwe"];
    let updatedUsers = users.filter(u => u !== user);
    return updatedUsers;
}
console.table(deleteUsers());
console.table(deleteUsers("system"));