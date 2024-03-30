const http = require('http');
const fs = require('fs');
const path = require('path');

// create a server and listen on port 8080

const server = http.createServer((req, res) => {
    const url = req.url;

    const indexpath = path.join(__dirname, 'index.html');
    const aboutpath = path.join(__dirname, 'about.html');
    const contactpath = path.join(__dirname, 'contact-me.html');
    const notfoundpath = path.join(__dirname, '404.html');

    if (url === '/') {
        fs.readFile(indexpath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (url === '/about') {
        fs.readFile(aboutpath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (url === '/contact-me') {
        fs.readFile(contactpath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        fs.readFile(notfoundpath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

});

// Start the server on port 8080

server.listen(8080, () => {
    console.log('Server is running on https://localhost:8080');
});