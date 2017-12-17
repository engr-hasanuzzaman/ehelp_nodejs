const express = require("express")
const app = express()

app.use((req, res, next) => {
    console.log(`req methto is ${req.method} and url is ${req.url}`)
    next()
})

app.get("/", (req, res) => {
    res.send("this is home")
})

app.get("/foo", (req, res) => {
    res.send("this is foo")
})

app.listen(3001)