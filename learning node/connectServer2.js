const { Pool } = require('pg');
const http = require('http');

const connection = new Pool({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"12345",
    database:"users",
});

class MessageBarinda extends Error {
    constructor(message){
        super(message);
        this.name = "MessageBarinda"
    }
}

async function getAllUsers() {
    try{
        const data = await connection.query('select * from students');
        console.log(data.rows);
        return data.rows;
    }
    catch(err){
        throw new MessageBarinda('Query not found in database easy');
    }
    
}

console.log('wait 1 second to get it');

setTimeout(async() => {
    try{
        await getAllUsers();
        console.log(`Got data from DB after 1 second!`)
    }
    catch(err){
        console.error(err);
    }
},10000);


setTimeout(() => {
    console.log(`Second message after 2 seconds.`);
},12000);


const PORT = 3000;

const server = http.createServer( async(req,res) => {
    try {
        const users = await getAllUsers();
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(users,null,2));
    }
    catch(err){
        res.writeHead(500,{ "Content-Type": "text/plain" });
        res.end(`Error: ${err.message}`)
    }

});

server.listen(PORT,'localhost',()=> {
    console.log(`Server running at http://localhost:${PORT}/`)
})