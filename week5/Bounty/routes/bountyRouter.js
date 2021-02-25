const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid')





const hunters = [
    {firstName: "Boba", 
    lastName: "Fett" ,
    living: true,
    bountyAmmount: 100,
    type: "Sith/Jedi",
    _id: uuid.v4() },

    {firstName: "IG-88", 
    lastName: "None" ,
    living: true,
    bountyAmmount: 43,
    type: "Bounty Hunter",
    _id: uuid.v4()},

    {firstName: "Asajj", 
    lastName: "Ventress" ,
    living: true,
    bountyAmmount: 27,
    type: "Former Sith",
    _id: uuid.v4()},

    {firstName: "Bossk", 
    lastName: "None" ,
    living: true,
    bountyAmmount: 67,
    type: "Bounty Hunter",
    _id: uuid.v4()}
    
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
        res.send(newHunter)
        })

bountyRouter.delete("/:hunterId", (req, res) => {
    const hunterId = req.params.hunterId
    const hunterIndex = hunters.findIndex(hunter => hunter._id === hunterId)
    hunters.splice(hunterIndex, 1)
    res.send("Deleted")
})

bountyRouter.put("/:hunterId", (req, res) => {
    const hunterId = req.params.hunterId
    const updatedObject = req.body
    const hunterIndex = hunters.findIndex(hunter => hunter._id === hunterId)
    const updatedHunter = Object.assign(hunters[hunterIndex], updatedObject)
    res.send(updatedHunter)
})


module.exports = bountyRouter