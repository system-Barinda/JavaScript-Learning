let barinda = async (a,b) => 
{
    let promise = new Promise((resolve) => {
      setTimeout(() => resolve(a + b),5000);
     
    });
    console.log("search data .................");
    let result = await promise;
    console.log(result);
}
barinda(20,10);
