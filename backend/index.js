const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development']);

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({message: "Successfully connected!"});
});

app.get("/movies", (req, res) => {
    knex("favorites").select()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err));
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})