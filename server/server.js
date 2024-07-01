import express from 'express';
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/api/characters", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("characters");
    const characters = await collection.find({}).toArray();
    res.json(characters);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error collecting characters: ", err);
  }
});

app.get('/api/films', async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("films");
    const films = await collection.find({}).toArray();
    res.json(films);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error collecting films: ", err);
  }
});
app.get('/api/planets', async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("planets");
    const planets = await collection.find({}).toArray();
    res.json(planets);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error collecting planets: ", err);
  }
});
app.get('/api/characters/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("characters");
    const characters = await collection.find({ "id":parseInt(id)}).toArray();
    res.json(characters);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error collecting characters: ", err);
  }
});
app.get('/api/films/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("films");
    const films = await collection.find({ "id": parseInt(id) }).toArray();
    res.json(films);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error collecting films: ", err);
  }
});

app.get('/api/planets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("planets");
    const planets = await collection.find({ 'id': parseInt(id) }).toArray();
    res.json(planets);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error collecting planets: ", err);
  }
});

app.get('/api/films/:id/characters', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    let collection = db.collection("films");
    //const film = await collection.find({ 'id':parseInt(id)}).toArray();
    collection = db.collection("films_characters"); 
    const cursor = collection.find({"film_id" : parseInt(id)});
    collection = db.collection("characters");    
    let characters = [];
    await cursor.forEach(doc => {
      characters.push(db.collection.find({"id": parseInt(id)}).toArray())
    })
    res.json(characters);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error collecting films: ", err);
  }
});

app.get('/api/films/:id/planets', async (req, res) => {

});
app.get('/api/characters/:id/films', async (req, res) => {
});
app.get('/api/planets/:id/films', async (req, res) => {
});
app.get('/api/planets/:id/characters', async (req, res) => {
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});