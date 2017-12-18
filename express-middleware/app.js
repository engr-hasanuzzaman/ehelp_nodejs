const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const morgan = require("morgan")

app.use(bodyParse.json())
app.use(morgan("dev"))

app.use((req, res, next) => {
    console.log(`req methto is ${req.method} and url is ${req.url}`)
    next()
})


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

app.post("/transaction", (req, res) => {
    console.log("request body is", req.body)
    res.send("this is transaction with req body is")
})

app.get("/foo", (req, res, next) => {
    if(!req.query.test) return res.status(422).send(new Error("parameter missins"))
    next()
},(req, res) => {
    res.send(`this is foo with req body ${req.body}`)
})

app.use((error, req, res, next) => {
    res.status(500).send(error)
})

app.listen(3001)