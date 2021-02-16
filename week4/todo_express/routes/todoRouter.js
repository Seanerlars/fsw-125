const express = require('express')
const todoRouter = express.Router()
const uuid = require('uuid')


const todos = [
    {
        name: "Grocery shop",
        description: "Get food for the home",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreshmadisonmarket.com%2Fshop-online%2Fgroceries&psig=AOvVaw0HRof1JH7PBwPxM2I9GzTA&ust=1613399943714000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID1sKbN6e4CFQAAAAAdAAAAABAD",
        completed: false,
        _id: uuid.v4()
    },

    {
        name: "Walk the dog",
        description: "Make sure the dog gets excercise",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkkraY3BdFOAb9Y193bndsaNgaE3g8Axq0A&usqp=CAU",
        completed: false,
        _id: uuid.v4()
    },

    {
        name: "Take out the Trash",
        description: "take out the old food in the house",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJvcAQoPNrTacm9qD4u-dBnrcUP6IhW5x4w&usqp=CAU",
        completed: false,
        _id: uuid.v4()
    },

    {
        name: "Cut the grass",
        description: "Make sure the lawn looks nice",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3NyZ_sA97NrPeeefWsE4FRTk6_LHkF3TNQ&usqp=CAU",
        _id: uuid.v4()
    }
    
    
]




todoRouter.route("/")
.get((req, res) => {
    res.send(todos)})
.post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid
        todos.push(newTodo)
        res.send("success")
        })

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Deleted")
})

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updatedObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updatedObject)
    res.send(updatedTodo)
})


module.exports = todoRouter