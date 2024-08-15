const { where } = require("sequelize")
const { Notes } = require("../models")

exports.getNotes = async () => {
  const data = await Notes.findAll()
  return data
}

exports.getNoteById = async (id) => {
  const data = await Notes.findOne({
    where: {
      id,
    },
  })
  return data
}

exports.addNote = async (payload) => {
  const data = await Notes.create({ title: payload.title, body: payload.body })
  return data
}

exports.deleteNote = async (id) => {
  const data = await Notes.destroy({
    where: {
      id,
    },
  })

  return data
}

exports.updateNote = async (payload) => {
  const data = await Notes.update(
    {
      title: payload.title,
      body: payload.body,
    },
    {
      where: {
        id: payload.id,
      },
    }
  )

  return data
}
