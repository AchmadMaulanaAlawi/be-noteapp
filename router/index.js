const express = require("express")
const router = express.Router()
const note = require("./note")

router.use("/note", note)

module.exports = router
