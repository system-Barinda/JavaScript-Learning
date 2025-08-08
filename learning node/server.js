const http = require('http');
const fs = require('fs')
const path = require('path');

const server = http.createServer((req,res) =>{

  let filePath = '';
  if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html');
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'about.html');
  } else if (req.url === '/contact') {
    filePath = path.join(__dirname, 'contact.html');
  } else {
    filePath = path.join(__dirname, '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html' });
  }


  fs.readFile(filePath, (err, content) => {
    if(err){
        res.writeHead(500);
        res.end('Server Error');
    }
    else{
       res.writeHead(res.statusCode === 404 ? 404 : 200, { 'Content-Type': 'text/html' });
       res.end(content);
    }
  });
});

server.listen(8080,() => {
  console.log('Server running at http://localhost:8080/about');
});