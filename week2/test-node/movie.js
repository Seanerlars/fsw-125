const express = require("express")
const app = express()




//Fake Data
const movies = [
    {name: 'Lord of the Rings'},

    {name: "Die Hard"},


    {name: "Speed" },


    {name: "Inception"},


    {name: "the Social Network"}
]

const actors = [
    {name: 'Tom Cruise'},

    {name: "Brad Pitt"},


    {name: "Zendaya" },


    {name: "Meryl Streep"},


    {name: "Chris Hemsworth"}
]

const Oscars = [
    {name: 'Best Picture'},

    {name: "Sound Design"},

    {name: "Animation" },

    {name: "Special Effects"},

    {name: "Costume/Makeup"}
]

   
app.get("/movies", (req, res) => {
    res.send(movies)
})

app.get("/movies/actors", (req, res) => {
    res.send(actors)
})

app.get("/movies/actors/Oscars", (req, res) => {
    res.send(Oscars)
})



 
app.listen(9000, () => {
    console.log("the server is running port 9000")
})