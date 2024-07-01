import express from 'express';
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

//const { Pool } = pg;
//// PostgreSQL pool configuration
//const pool = new Pool({
    //user: 'postgres',
    //host: process.env.POSTGRES_HOST,
    //database: process.env.POSTGRES_DB,
    //password: 'postgres',
    //port: 5432,
//});

const app = express();
app.use(cors());
const PORT = 3000;

app.get('/api/planets', async (req, res) => {
    try {
      //const client = await MongoClient.connect(url);
      //const db = client.db(dbName);
      //const collection = db.collection(collectionName);
      //const socks = await collection.find({}).toArray();
      //res.json(socks);
      res.json({"planet": "test"});
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send("Error fetching planets");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});