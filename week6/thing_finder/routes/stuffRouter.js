const express = require('express')
const stuffRouter = express.Router()
const uuid = require("uuid")




const items = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid.v4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid.v4()
    },{
        name: "basket-ball",
        type: "toy",
        price: 1000,
        _id: uuid.v4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid.v4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid.v4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid.v4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid.v4()
    }
]



stuffRouter.route("/")
.get((req, res) => {
    res.send(items)})

stuffRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundItem = items.find(item => item._id === itemId)
    res.send(foundItem)
})

stuffRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredItems = items.filter(item => item.type === type)
    res.send(filteredItems)
})

stuffRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const name = req.query.name
    const filteredItems = items.filter(item => item.type && item.name === type && name)
    res.send(filteredItems)
})



.post((req, res) => {
        const newItem = req.body
        newItem._id = uuid
        item.push(newItem)
        res.send("success")
        })


module.exports = stuffRouter