import { MongoClient } from 'mongodb'
import 'dotenv/config'

let connectionString = process.env.CONNECTION_STRING
let client = new MongoClient(connectionString)

let db;
let conn;

try {
    conn = await client.connect()
    db = conn.db('sample_training')
} catch {
    console.log("Error")
    db = null
}

export default db;

