const pipe = 
            (...functions) =>
            (initialValue) =>
             functions.reduce((acc,fn) => fn(acc), initialValue);       

const double = (x) => 2 * x;            
const triple = (x) => 3 * x;            
const quadriple = (x) => 4 * x;

let multply6 = pipe(double,triple);
let multply9 = pipe(triple,triple);
let multply16 = pipe(quadriple,quadriple);
let multply24 = pipe(double,triple,quadriple);

console.log(multply9(9));