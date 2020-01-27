// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");

const noteData = [
    {
        noteTitle: "Your title here",
        noteText: "Your text here",
        NoteID: 0
    }
];

// Set up Express app

const app = express();
const PORT = process.env.PORT || 3000;


// Set Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Router

// The below points our server to a series of "route" files. 
// These routes give our server a map of how to respond to URLs given

require("../../../routes/apiRoutes")(app);
require("../../../routes/htmlRoutes")(app);


// Listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

module.exports = noteData;