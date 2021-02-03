const express = require("express")
const app = express()




//Fake Data
const actors = [
    {name: 'Tom Cruise'},

    {name: "Brad Pitt"},


    {name: "Zendaya" },


    {name: "Meryl Streep"},


    {name: "Chris Hemsworth"}
]

  
app.get("/", (req, res) => {
    res.send(actors)
})




app.listen(9000, () => {
    console.log("the server is running port 9000")
})