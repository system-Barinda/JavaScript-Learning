// let pin = "1234f5";
// let pinChanged = pin.split("").join('');
// if(pinChanged.length == 4 || pinChanged.length == 6){
//     if(! isNaN(pinChanged)){
//         console.log(true)
//     }
//     else{
//          console.log(false);
//     }
// }
// else{
//     console.log(false);
// }

function validatePIN (pin) {

  return /^(\d{4}|\d{6})$/.test(pin);


}
console.log(validatePIN("1234f5"));