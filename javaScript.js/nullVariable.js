
function convertNullableValues(barinda){
    let result = {};
    for(let key in barinda){
        if(barinda[key] === null){
            result[key] = 1;
        }
        else if(barinda[key] === undefined){
            result[key] = "";
        }
        else{
            result[key] = barinda[key];
        }
    }
    return result;
}

const input = {
  name: undefined,
  age: null,
  score: 85,
  status: "active"
};
console.log(convertNullableValues(input));