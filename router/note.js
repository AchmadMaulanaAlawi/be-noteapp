const express = require("express")
const router = express.Router()
const noteController = require("../controller/note")

router.route("/").get(noteController.getNotes).post(noteController.addNote)

router
  .route("/:id")
  .get(noteController.getNoteById)
  .delete(noteController.deleteNote)
  .put(noteController.updateNote)

// MENAMBAHKAN DELETE DAN EDIT

module.exports = router
