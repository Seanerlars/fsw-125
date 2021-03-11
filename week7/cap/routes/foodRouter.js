const express = require('express')
const foodRouter = express.Router()
const uuid = require("uuid")




const foods = [
    {
        foodName: "banana",
        type: "fruit",
        price: 200,
        _id: uuid.v4()
    },{
        foodName: "soup",
        type: "mix",
        price: 300,
        _id: uuid.v4()
    },{
       foodName: "flour",
        type: "grain",
        price: 100,
        _id: uuid.v4()
    }
]




foodRouter.route("/")
.get((req, res) => {
    res.send(foods)})
.post((req, res) => {
        const newFood = req.body
        newFood._id = uuid
        foods.push(newFood)
        res.send('/')
        })

        foodRouter.get("/search/foodName", (req, res) => {
            const foodName = req.query.foodName
            const filteredItems = items.filter(item => item.name === foodName)
            res.send(filteredItems)
        })
        
        foodRouter.get("/search/type", (req, res) => {
            const type = req.query.type
            const name = req.query.type
            const filteredItems = items.filter(item => item.type && item.name === type && name)
            res.send(filteredItems)
        })
        

foodRouter.delete("/:foodId", (req, res) => {
    const foodId = req.params.foodId
    const foodIndex = foods.findIndex(food => food._id === foodId)
    foods.splice(foodIndex, 1)
    res.send("Deleted")
})

foodRouter.put("/:foodId", (req, res) => {
    const foodId = req.params.foodId
    const updatedObject = req.body
    const foodIndex = foods.findIndex(food => food._id === foodId)
    const updatedFood = Object.assign(foods[foodIndex], updatedObject)
    res.send(updatedFood)
})


module.exports = foodRouter