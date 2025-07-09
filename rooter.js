const http = require('http');
const fs = require('fs');
const path = require('path');


const host = 'localhost';
const port = 5500;

const server = http.createServer((request, response) => {
    
    const filePath = path.join(__dirname,'index.html');
    
    
    fs.readFile(filePath, (error, data) => {
        if(error) {
            response.writeHead(500, {'Content-type': 'text/plain'});
            response.end('Terjadi Kesalahan Server');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        }
    });
});

server.listen(port, host, () => {
    console.log(`server berjalan di http://${host}:${port}`);
})