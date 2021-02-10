const express = require("express")
const app = express()

app.use(express.json())

const hunters = [
    {firsName: "Boba", 
    lastName: "Fett" ,
    living: true,
    bountyAmmount: 100,
    type: "Sith/Jedi",
    ID: "501"},

    {firsName: "IG-88", 
    lastName: "None" ,
    living: true,
    bountyAmmount: 43,
    type: "Bounty Hunter",
    ID: "IG Model"},

    {firsName: "Asajj", 
    lastName: "Ventress" ,
    living: true,
    bountyAmmount: 27,
    type: "Former Sith",
    ID: "Dark Mistress"},

    {firsName: "Bossk", 
    lastName: "None" ,
    living: true,
    bountyAmmount: 67,
    type: "Bounty Hunter",
    ID: "Snarls"}
    
]

app.get("/hunters", (req, res) => {
    res.send(hunters)
})

app.post("/hunters", (req, res) => {
const newHunter = req.body
hunters.push(newHunter)
res.send("success")
})




app.listen(9000, () => {
    console.log("the server is running")
})

 