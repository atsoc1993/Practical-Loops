import express from 'express'

let port = 3000
let app = express();


app.get('/', (req, res) => {
    console.log("Yes")
    res.status = 200
    res.send();
})

app.listen(port, () => {
    console.log(`Express app running at http://localhost:${port}`)
})