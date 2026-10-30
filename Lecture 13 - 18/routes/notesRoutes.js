const express = require("express")
const { getNotes, getNoteById, createNote, updateNote, deleteNote } = require("../controllers/notesController")
const { isAuthorized } = require("../middlewares/isAuthorized")
const { isLoggedIn } = require("../middlewares/isLoggedIn")
const router =  express.Router()

router.get("/get-notes",isAuthorized,isLoggedIn,getNotes)
router.get("/get-note/:id",isAuthorized,getNoteById)
router.post("/create-note",isAuthorized,createNote)
router.put("/update-note/:id",updateNote)
router.delete("/delete-note/:id",deleteNote)

module.exports = router