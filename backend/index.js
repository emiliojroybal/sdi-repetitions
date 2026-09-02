const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development']);

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({message: "Connected successfully!"});
})

app.get("/movies", (req, res) => {
    knex("favorites").select()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({message: err}));
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})