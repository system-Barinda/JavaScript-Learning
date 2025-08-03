async function barinda(){
   let data = "https://jsonplaceholder.typicode.com/users";

   try{
    const res = await fetch(data);
    
    if(! res.ok){
        throw new Error('invalid url we given');
    }
    else
    {
      const result = await res.json();

      setTimeout(() => {
        result.map(user => {
            console.log(user.username);
        })
      },2000);
    }    
}
catch(err){
    console.error('error found:',err.message);
}

}
console.log('wait 2s !..........');
barinda();