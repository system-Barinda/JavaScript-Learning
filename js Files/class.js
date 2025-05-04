class barinda {
    static add(a,b)
    {
        return new Promise((resolve, reject) => {
            if(typeof a !== 'number' && typeof b !== 'number')
            {
                reject("the number inserted are not valid");
            }
            else 
            {
                resolve( a + b);
            }
        });
    }
    static mult(num1,num2)
    {
        return new Promise((re,fail) => {
            if(typeof num1 !== 'number' && typeof num2 !== 'number')
            {
                fail(" the number entered are not valid right now");
            }
            else 
            {
                re(num1 * num2)
            }
        });
    }

}
barinda.add(10, 5)
    .then(result => console.log("Addition Result: " + result))
    .catch(error => console.error(error));

