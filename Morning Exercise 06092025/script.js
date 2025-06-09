import express from 'express'

let app = express();

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1> <a href='/98'>Take one down, pass it around . . .</a>`);
});

app.get('/:bottles', (req, res) => {
    let arg = req.params.bottles
    if (req.params.bottles != 0) {
        res.send(`<h1>${arg} Bottles of beer on the wall</h1> <a href='/${arg - 1}'>Take one down, pass it around . . .</a>'`);
    } else {
        res.send(`<a href='/'>Start Over?</a>`);
    };
});


let port = 3000;
app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});