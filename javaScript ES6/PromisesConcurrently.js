const task = (id,delay) => 
     new Promise(resolve => {
        setTimeout(() => {
            console.log(`Task ${id} done`);
            resolve(id);

        },delay)
     });
     Promise.all([
        task(10,2000),
        task(20,1000),
        task(30,3000),
        task(40,1000)
     ]).then(result => {
        console.log("All tasks finished:", result);
     });