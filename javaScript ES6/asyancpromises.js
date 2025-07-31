// function getData(){
//     return new Promise((resolve) => {
//         setTimeout(() => resolve('my name is system sylvere Barinda and recieved'),1000);
//     });
// }
// async function fetchData(){
//     console.log("fetching.........");
//     const result = await getData();
//     console.log(result);
// }
// fetchData();


function getData(){
let getUrL = 'https://jsonplaceholder.typicode.com/posts/1';
return new Promise((resolve) => {
   setTimeout(() => {
    fetch(getUrL).then((response) => {
        if(! response.ok){
            throw new Error('the connection is now available');
        }
        return response.json();
    })
    .then((data) =>{
      resolve(data.body);
    })
   
    
   },3000)
});
}
async function fetchData(){
  console.log("fetching.........");
  const res = await getData();
  console.log(res)
}
fetchData();