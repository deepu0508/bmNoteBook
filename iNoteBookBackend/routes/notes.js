const express = require("express")
const fetchUser = require("../middleware/fetchUser")
const { body, validationResult } = require('express-validator');
const router = express.Router()
const Notes = require("../models/Notes")

// Router 1: Get all the Notes using GET: /api/notes/fetchallnotes
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error)
        res.status(401).json({ error: "Internal Server Error" })
    }
})


// Router 2: Add Note using POST : /api/notes/addnote
router.post('/addnote', fetchUser, [
    body("title", "Enter valid Title").isLength({ min: 3 }).notEmpty(),
    body("description", "Description must be 5 characters").isLength({ min: 3 }).notEmpty()
], async (req, res) => {

    try {
        // note fetch from req 
        const { title, description, tag } = req.body;

        // Check all inputs are correct or not
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: "Please enter all information" });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save();
        res.json({ saveNote });
    } catch (error) {
        console.error(error)
        res.status(401).json({ error: "Internal Server Error" })
    }

})


// Router 3: Note Update using put: /api/notes/updatenote
router.put("/updatenote/:id", fetchUser, async (req, res) => {
    try {

        // fetch user updated note
        const { title, description, tag } = req.body;

        // create new updated note
        const newNote = {};

        // check user which note are updated
        if (title) { newNote.title = title; }
        if (description) { newNote.description = description; }
        if (tag) { newNote.tag = tag; }

        // Find to be note which updated
        let note = await Notes.findById(req.params.id);

        // check note is available or not
        if (!note) { return res.status(404).send("Not Found"); }

        // check note are access by same user or not
        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed"); }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json(note);
    } catch (error) {
        console.error(error);
        res.send("Internal Server Error");
    }

})

// Router 4 : Delete Note using delete : /api/notes/deletenote/:id
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
    try {
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found"); }

        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed"); }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.send({ "Status": "Note Successfully Deleted", note });
    } catch (error) {
        console.error(object);
        res.send("Internal Server");
    }
})

module.exports = router