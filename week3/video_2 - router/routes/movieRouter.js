const express = require('express')
const filmRouter = express.Router()
const uuid = require("uuid")

const films = [
    {title: "Lord of the rings", genre: "fantasy", _id: uuid },
    {title: "star Wars", genre: "sci-fi", _id: uuid },
    {title: "Nightmare on Elm Street", genre: "horror", _id: uuid }
]

filmRouter.get("/", (req, res) => {
    res.send(films)
})

filmRouter.post("/", (req, res) => {
const newFilm = req.body
newFilm._id = uuid()
films.push(newFilm)
res.send("success")
})







module.exports = filmRouter