const noteRepo = require("../repository/note")

exports.getNotes = async () => {
  const data = await noteRepo.getNotes()
  return data
}

exports.getNoteById = async (id) => {
  const data = await noteRepo.getNoteById(id)
  return data
}

exports.addNote = async (payload) => {
  const data = await noteRepo.addNote(payload)
  return data
}

exports.deleteNote = async (id) => {
  const data = await noteRepo.deleteNote(id)
  return data
}

exports.updateNote = async (payload) => {
  const data = await noteRepo.updateNote(payload)
  return data[0]
}
