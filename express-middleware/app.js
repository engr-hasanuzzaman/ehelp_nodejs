const express = require("express")
const app = express()

app.use((req, res, next) => {
    console.log(`req methto is ${req.method} and url is ${req.url}`)
    next()
})

// 
app.use((req, res, next) => {
    if(req.query.api_key){
        next()
    } else{
        next(new Error("api is missing"))  
    }
})

app.get("/", (req, res) => {
    res.send("this is home")
})

app.get("/foo", (req, res, next) => {
    if(!req.query.test) res.status(422).send(new Error("parameter missins"))
    next()
},(req, res) => {
    res.send("this is foo")
})

app.use((error, req, res, next) => {
    res.status(500).send(error)
})

app.listen(3001)