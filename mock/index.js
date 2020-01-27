const { readFileWithPromise } = require("./lib");
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const firstCustomer = {
    name: 'Vasya',
    age: '20',
    dateOfBirth: '11.01.2000'
};
const secondCustomer = {
    name: 'Petya',
    age: '22',
    dateOfBirth: '11.02.1998'
};

const mock = [firstCustomer, secondCustomer];

const server = http.createServer((req, res) => {
    readFileWithPromise('./index.html')
    .then(data => {
        console.log(data);
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
    }); 
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
    console.log(mock);  
});