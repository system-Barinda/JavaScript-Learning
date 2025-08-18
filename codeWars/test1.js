function arra(test){
    const barinda = test.map((data,ind) => {
        return ++ind + ":" + data;
    });
    return barinda;

}
console.log(arra(["a", "b", "c"]))