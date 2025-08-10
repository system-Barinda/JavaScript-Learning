const { Client } = require('pg');

const connection = new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"12345",
    database:"users"
});
connection.connect();

async function getUsers() {
    let data = await connection.query('SELECT * FROM students');
    console.log(data.rows);
}
 console.log(` wait the 5s to get it !.......`);

setTimeout(() => {
    getUsers();
    console.log(`...........fetch data are seccessefully it !.......`)
},5000);
setTimeout(() => {
    console.log(`...........fetch data are seccessefully it !.......`)
},7000);