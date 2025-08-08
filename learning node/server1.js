const http = require('http');
const PORT = 2000;

const server = http.createServer((req,res) => {
      res.writeHead(200,{'content-type':'text/plain'});

      res.end('hello, my name is Barinda system sylvere welcome to my website');
});

server.listen(PORT,'localhost', () => {
    console.log(`the server is : http://localhost:${PORT}/`);
});