const express = require("express")
const app = express()



//Fake Data
const users = [
    {name: "joe", age:20},
    {name: "moe", age:25},
    {name: "toe", age:28},
    {name: "loe", age:29},
    {name: "koe", age:232}
]

    //1: Endpoint (mount path)
    //2: Callback function
    //2: req = request & res = response
app.get("/users", (req, res) => {
    res.send(users)
})



    // 1: Port 2: CallBack
app.listen(9000, () => {
    console.log("the server is running port 9000")
})