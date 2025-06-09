import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors'

let expressPort = 3000;
let app = express();
app.use(cors());
let expressEndpoint = `http://localhost:${expressPort}`

let mongouri = 'mongodb://localhost:27017'
let client = new MongoClient(mongouri);

await client.connect()
let db = client.db('testdb')
let collection = db.collection("items");

async function setInitialIndex() {
    let exists = await collection.findOne({'index' : { $exists : true } } );

    if (exists) {
        console.log("Index already present")
    } else {
        collection.insertOne({'index': 0})
        console.log("Initial index set to 0")
    }
}

async function getIndex() {
    let queryResult = await collection.findOne({'index' : { $exists : true } } );
    console.log(queryResult.index)
    return queryResult.index
}


async function incrementIndex(currentIndex) {
    await collection.updateOne(
        { index: currentIndex},
        { $set: { index: currentIndex + 1} }
    )

}

async function uploadWithIndexAndMessage (index, message) {
    await collection.insertOne({index: index, message: message})
    console.log(`Inserted data: ${message} at index: ${index}`)
}

async function getAllData() {
    let allitems = collection.find().toArray();
    return allitems;
}
app.get('/setData/:data', async (req, res) => {
    console.log("Getting index")
    let index = await getIndex();
    console.log("Got index")
    await uploadWithIndexAndMessage(index, req.params.data)
    console.log("Uploaded")
    await incrementIndex(index);
    console.log("Incrementing index")
    res.send({message: `Succesfully uploaded to mongodb at index ${index}`})
})

app.get('/getData', async (req, res) => {
    let allItems = await getAllData();
    console.log(allItems);
    res.send({data: allItems})
});

app.listen(expressPort, () => {
    console.log(`Express Server listening on ${expressEndpoint}`)
})

setInitialIndex();