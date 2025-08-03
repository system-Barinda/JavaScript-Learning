async function getAllData(){
    const getUrl = "https://jsonplaceholder.typicode.com/users";
    try{
     const response = await fetch(getUrl);
     

     if(! response.ok){
        throw new Error('no data found');
     }
     else{
        const data = await response.json();

        data.forEach((user) => {
            console.log(user.username)
        });
     }
    }
    catch(err) {
        console.error('error:',err.message);
    };
 
   
}
getAllData();