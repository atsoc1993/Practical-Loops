import express from 'express'

let app = express();

let bottles = 99;

app.get('/', (req, res) => {
    res.send(`<h1>${bottles} Bottles of beer on the wall</h1> <a href='http://localhost:${port}/${bottles - 1}'>Take one down, pass it around . . .</a>'`);
    bottles--;
});

app.get('/:bottles', (req, res) => {
    console.log(req.params)
    if (req.params.bottles != 0) {
        res.send(`<h1>${bottles} Bottles of beer on the wall</h1> <a href='http://localhost:${port}/${bottles - 1}'>Take one down, pass it around . . .</a>'`);
        bottles--;
    } else {
        bottles = 99;
        res.send(`<a href='http://localhost:${port}/'>Start Over?</a>`);
    };
});


let port = 3000;
app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});