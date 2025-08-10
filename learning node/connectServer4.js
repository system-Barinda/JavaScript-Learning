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
        if (req.url === "/users") {
            const users = await getAllUsers();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true, data: users }));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: "Not Found" }));
        }
    } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: err.message }));
    }
});

server.listen(PORT, "localhost", () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
