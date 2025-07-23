function arrayStatus(arr){
    if(arr.length === 0){
        return {
            sum:0,
            average:0,
            min:null,
            max:null,

        };
    }

    let sum = arr.reduce((a,b) => a + b,0);
    let average = parseFloat( sum / arr.length).toFixed(2);
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return{
        sum,
        average,
        min,
        max,
    };
}
console.log(arrayStatus([1,2,3,4,5]));