// function getEmployee() {
//     console.log('the function has started');

//     const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

//     for (const name of names) {
//         console.log(name);
//     }

//     console.log('the function has ended');
// }

// getEmployee();


function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
        yield
    }
    

    console.log('the function has ended');
}
const m = getEmployee()
m.next()
m.next()