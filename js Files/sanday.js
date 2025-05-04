 const num1 = 100;
 const num2 = 900;
let barinda = (num1,num2) =>{
  
  return num1 + num2;
  
};

function update()
{
    let getNew = 1000;
    let getAdivisor = 20;
    const bothNumber = getNew / getAdivisor;
    return bothNumber;
}
let system = () => {
    update();
    let numb = barinda(num1,num2);
    return update() + numb;
};
function addTwoFunction()
{
    system();
    let b = 950;
    const sum = system() + b;
    return sum;
}
console.log(addTwoFunction());
