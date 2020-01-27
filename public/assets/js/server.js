// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");


// Set up Express app

const app = express();
const PORT = process.env.PORT || 3000;


// Set Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes

//  HTML
//  GET `/notes` - Should return the `notes.html` file.

//  GET `*` - Should return the `index.html` file

//  API
//  GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
//  POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file
//  DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete.

//  use ++integer (instead of i++) to add ID to notes, so they are accessible to delete


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});