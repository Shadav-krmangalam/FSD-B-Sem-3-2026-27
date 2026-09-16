const express = require("express")
const { getNotes, getNoteById, createNote, updateNote, deleteNote } = require("../controllers/notesController")
const router =  express.Router()

router.get("/get-notes",getNotes)
router.get("/get-note/:id",getNoteById)
router.post("/create-note",createNote)
router.put("/update-note/:id",updateNote)
router.delete("/delete-note/:id",deleteNote)

module.exports = router