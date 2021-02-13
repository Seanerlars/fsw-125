//Importance on ID's

const express = require("express")
const app = express()


app.use(express.json())


app.use('/films', require("./routes/movieRouter.js"))
app.use('/tvshows', require("./routes/tvshowrouter.js"))






app.listen(9000, () => {
    console.log("the server is running")
})

