const express = require("express")
const app = express()

app.use(express.json())

const films = [
    {title: "Lord of the rings", genre: "fantasy" },
    {title: "star Wars", genre: "sci-fi"},
    {title: "Nightmare on Elm Street", genre: "horror"}
]

app.get("/films", (req, res) => {
    res.send(films)
})

app.post("/films", (req, res) => {
const newFilm = req.body
films.push(newFilm)
res.send("success")
})

//Middleware :
// a function that fires on the inbetween

//Reqest Body = (req.body)
// (app.use
// app.use('/' , express.json())



app.listen(9000, () => {
    console.log("the server is running")
})

 