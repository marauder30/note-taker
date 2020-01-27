// Load data

const noteData = require("../public/assets/js/server")

//  API

module.exports = function(app) {

//  GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

app.get("/api/notes"), function(req, res) {
    res.JSON(noteData);
}

//  POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file
//  use ++integer (instead of i++) to add ID to notes, so they are accessible to delete

app.post("/api/notes"), function(req, res) {
    let note = req.body;
    ++note.noteID;
    noteData.push(note);
    res.json(note);
    
}

//  DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete.

app.delete("api/notes/:noteID"), function(req, res) {
    let note = req.params.noteID;

    for (var i = 0; i < noteData.length; i++) {
        if (note === noteData[i].noteID) {
            noteData.splice(i, 1);
            return res.json(noteData);
        }
    }
}

}



