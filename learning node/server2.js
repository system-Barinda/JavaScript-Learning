const barinda = require("http");
const PORT = 3000;

const server = barinda.createServer((req,res) => {
  res.writeHead(200,{'content-type':'text/plain'});
  res.end('my name is Barinda system sylvere');
});
server.listen(PORT,'localhost',() => {
    console.log(`the server is http://localhost:${PORT}`);
});