//Importance on ID's

const express = require("express")
const app = express()
const uuid = require("uuid")

app.use(express.json())

const films = [
    {title: "Lord of the rings", genre: "fantasy", _id: uuid },
    {title: "star Wars", genre: "sci-fi", _id: uuid },
    {title: "Nightmare on Elm Street", genre: "horror", _id: uuid }
]

app.get("/films", (req, res) => {
    res.send(films)
})

app.post("/films", (req, res) => {
const newFilm = req.body
newFilm._id - uuid()
films.push(newFilm)
res.send("success")
})



app.listen(9000, () => {
    console.log("the server is running")
})

