const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

const SAMPLE_USERS = [
    {
        id: '1',
        firstName: 'Vasya',
        lastName: null,
        email: 'vasya@gmail.com',
        imageSrc: null,
        language: null,
        country: null,
        privileges: {
            isAdmin: true,
        },
    },
    {
        id: '2',
        firstName: 'Tatiana',
        lastName: 'Stone',
        email: 'tatiana.stone@mail.com',
        imageSrc: null,
        language: 'en-US',
        country: 'US',
        privileges: {
            isAdmin: false,
        },
    },
    {
        id: '3',
        firstName: 'Jan',
        lastName: 'Novák',
        email: 'honza.novak@seznam.cz',
        imageSrc: null,
        language: 'cs-CZ',
        country: 'CZ',
        privileges: {
            isAdmin: false,
        },
    }
]

app.get('/users/getAll', (req, res) => {
  res.send({ users: SAMPLE_USERS });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
