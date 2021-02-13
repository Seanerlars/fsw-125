const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid")




const hunters = [
    {firsName: "Boba", 
    lastName: "Fett" ,
    living: true,
    bountyAmmount: 100,
    type: "Sith/Jedi",
    _id: uuid},

    {firsName: "IG-88", 
    lastName: "None" ,
    living: true,
    bountyAmmount: 43,
    type: "Bounty Hunter",
    ID: "IG Model", uuid},

    {firsName: "Asajj", 
    lastName: "Ventress" ,
    living: true,
    bountyAmmount: 27,
    type: "Former Sith",
    ID: "Dark Mistress", uuid},

    {firsName: "Bossk", 
    lastName: "None" ,
    living: true,
    bountyAmmount: 67,
    type: "Bounty Hunter",
    ID: "Snarls", uuid}
    
]

// bountyRouter.get("/", (req, res) => {
//     res.send(hunters)
// })

// bountyRouter.post("/", (req, res) => {
// const newHunter = req.body
// newHunter._id = uuid
// hunters.push(newHunter)
// res.send("success")
// })

bountyRouter.route("/")
.get((req, res) => {
    res.send(hunters)})
.post((req, res) => {
        const newHunter = req.body
        newHunter._id = uuid
        hunters.push(newHunter)
        res.send("success")
        })


module.exports = bountyRouter