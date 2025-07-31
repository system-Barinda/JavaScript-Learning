let getUrL = 'https://jsonplaceholder.typicode.com/posts/1';

let barinda = fetch(getUrL);
barinda.then((response) => {
    if( ! response.ok){
        throw new Error('Network response was not ok');

    }
    return response.json();
})
.then((data) => {
    setTimeout(() => {
         console.log(data.body)
    },2000);
})
.catch(error => console.log(error));
