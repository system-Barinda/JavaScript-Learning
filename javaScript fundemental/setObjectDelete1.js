let onePe1 = {name:"my name is barinda system sylvere"};
let onePe2 = {age:30};
let onePe3 = {location:"muhanga"};
let onePe4 = {districty:"rwamagana"};

let setAll = new Set();
  setAll.add(onePe1);
  setAll.add(onePe2);
  setAll.add(onePe3);
  setAll.add(onePe4);
  console.table(setAll);

  for(let char of setAll){
    if(char.location === 'muhanga'){
        setAll.delete(char);
    }
  }
  console.table(setAll)