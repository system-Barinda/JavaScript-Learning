// function A(x){
//     function B(y){
//         function C(z){
//             console.log(x+y+z);
//         }
//         C(3);
//     }
//     B(2);
// }
// A(1);

function outside(){
    const x = 5;
    function inside(x){
        return x * 2;
    }
    return inside;
}
console.log(outside()(10));