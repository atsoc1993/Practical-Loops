// PS C:\Users\atsoc> node -e 'console.log(17 + 25)'
// 42

// console.log("Hello World!")

const http = require('http');


const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write('Hello World!\n')
            break

        case '/h1':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write('<h1 style="color: red">This is a header!</h1>')
            break

        case '/pTag':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write('<p style="color: blue">This is a P Tag!</p>')
            break

        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.write('Invalid Endpoint')
            break
    }

    res.end();

});


server.listen(3000, '127.0.0.1')

