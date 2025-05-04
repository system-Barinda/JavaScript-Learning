
function rentalCarCost(d) {
    const d1 = 40;
    const days = 7;
    const bonus = 50;
    const bon_20 = 20;
    if( d >= days)
    {
        let result = d * d1;
        let resultday = result - bonus;
        console.log( " you allowed to get 50 off to your rent the car  "+  resultday);
    }
    else if( d >= 3 && d < days)
    {
        let result = d * d1;
        let resultday = result - bon_20;
        console.log(" you allowed to get 20 off to your rent the car  " + resultday);

    }
    else 
    {
        let result = d * d1;
        let resultday = result - bon_20; 
        console.log(" you are not  allowed to get  off to your rent the car  " + resultday);  
    }
  }
  rentalCarCost(1);

//   function rentalCarCost(d) {
//     let dailyRate = 40;
//     let total = d * dailyRate;

//     if (d >= 7) {
//         total -= 50;
//     } else if (d >= 3) {
//         total -= 20;
//     }

//     return total;
// }
