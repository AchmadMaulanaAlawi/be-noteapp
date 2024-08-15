const noteUsecase = require("../usecase/note")

exports.getNotes = async (req, res, next) => {
  try {
    const data = await noteUsecase.getNotes()

    res.status(200).json({
      message: "Success",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.getNoteById = async (req, res, next) => {
  try {
    const { id } = req.params
    if (!id || id === null || id === "") {
      return next({
        message: "Note ID must be provided!",
        statusCode: 400,
      })
    }

    const data = await noteUsecase.getNoteById(id)

    if (data === null) {
      return next({
        message: `Note with id ${id} is not found`,
        statusCode: 400,
      })
    }

    res.status(200).json({
      message: "Success",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.addNote = async (req, res, next) => {
  try {
    const { title, body } = req.body

    if (!title || title === null || title === "") {
      return next({
        message: "Title must be provided!",
        statusCode: 400,
      })
    }

    if (!body || body === null || body === "") {
      return next({
        message: "Body of note must be provided!",
        statusCode: 400,
      })
    }

    const data = await noteUsecase.addNote({ title, body })

    res.status(201).json({
      message: "You have created a note successfully!",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id || id === null || id === "") {
      return next({
        message: "Note ID must be provided!",
        statusCode: 400,
      })
    }

    const data = await noteUsecase.deleteNote(id)

    res.status(201).json({
      message: "You have deleted a note successfully!",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.updateNote = async (req, res, next) => {
  try {
    const { id } = req.params
    const { title, body } = req.body

    if (!id || id === null || id === "") {
      return next({
        message: "Note ID must be provided!",
        statusCode: 400,
      })
    }

    if (!title || title === null || title === "") {
      return next({
        message: "Note title must be provided!",
        statusCode: 400,
      })
    }

    if (!body || body === null || body === "") {
      return next({
        message: "Note body must be provided!",
        statusCode: 400,
      })
    }

    const data = await noteUsecase.updateNote({ id, title, body })

    res.status(201).json({
      message: "You have updated a note successfully!",
      data,
    })
  } catch (error) {
    next(error)
  }
}
