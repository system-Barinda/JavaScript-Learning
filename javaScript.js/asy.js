const barinda = async () => {
    try{
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();
setTimeout(() => {
    console.log(data);
},2000);
}catch (error){
    console.error(error);
}
}
console.log("wait 2 second to get data !.....");
barinda();