const myPromises = new Promise((resolve,reject) => {
    console.log("wait......!");
    setTimeout(() => {
        
        const seccess = true;
        seccess ? resolve("✅ Done!") : reject("❌ Error!");
    },2000);
});

myPromises.then( result => console.log(result))
           .catch(result => console.log(result));
