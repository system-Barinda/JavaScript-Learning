// function * barinda(){
//     const users = ['barinda','system','sylvere'];

//     for(let i = 0; i < users.length;i++){
//         console.log(users[i])
//         yield
//     }
// }
// let barindaa = barinda();
// barindaa.next()
// barindaa.next()

function* system(){
    const response = yield;
    console.log(`the hello, ${response}`);
}
let barinda = system()
barinda.next()
barinda.next('barinda system sylveree')