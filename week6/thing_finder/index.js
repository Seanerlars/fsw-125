
const express = require("express")
const app = express()


app.use(express.json())


app.use('/items', require("./routes/foodRouter.js"))







app.listen(9000, () => {
    console.log("the server is running")
})



 