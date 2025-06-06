import express from 'express'

let app = express();

app.get('/greetings/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});

let magicEightBallResponses = ["Yes!", "It is certain.", "It is decidely so.", "You may rely on it.", "Outlook good!", "Most Likely!", "As i see it yes!", "Signs point to yes!", "Ask again later!", "Without a doubt!"];
// Test with http://localhost:3000/magic/Will%20I%20grow%20old
app.get('/magic/:question', (req, res) => {
    let question = req.params.question;
    let randomResponse = magicEightBallResponses[Number(Math.random() * 100).toFixed() % magicEightBallResponses.length];
    let displayMessage = `<h1>Question: ${question}?</h1> <h1>Response: ${randomResponse}</h1>`;
    res.send(displayMessage);
});

//Test with http://localhost:3000/tip/120/15
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let total = req.params.total;
    let tipPercentage = req.params.tipPercentage;
    let totalHeader = `<h1>Total: $${total}</h1>`;
    let tipPercentageHeader = `<h1>Total: $${tipPercentage}</h1>`;
    let yourTipHeader = `<h1>Your tip will be: $${total * (tipPercentage / 100)}</h1>`;
    let response = totalHeader + tipPercentageHeader + yourTipHeader;
    res.send(response);
});

let port = 3000;
app.listen(port, () => {
    console.log(`Listing on http://localhost:${port}`);
});