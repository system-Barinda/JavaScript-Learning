const { Pool } = require("pg");
const http = require("http");


const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "12345",
    database: "users",
});


class Messagebarinda extends Error {
    constructor(message) {
        super(message);
        this.name = "Messagebarinda";
    }
}


async function getAllUsers() {
    try {
        let data = await connection.query("SELECT * FROM students");
        return data.rows;
    } catch (err) {
        throw new Messagebarinda("Query not found in database easy");
    }
}


const PORT = 3000;
const server = http.createServer(async (req, res) => {
    try {
        const users = await getAllUsers();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users, null, 2));
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error: ${err.message}`);
    }
});

server.listen(PORT, "localhost", () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
