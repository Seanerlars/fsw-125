
const express = require("express")
const app = express()
const morgan = require('morgan')


app.use(express.json())
app.use(morgan('dev'))


app.use('/hunters', require("./routes/bountyRouter.js"))







app.listen(9000, () => {
    console.log("the server is running")
})



 