function valid(phone){
    let realtest = /^(\d{10}|\d{3}[-]\d{3}[-]\d{4})$/;
    return realtest.test(phone);
}
console.log(valid("1234567890"));