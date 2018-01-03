const express = require("express")
const bodyParser = require("body-parser")
const logger = require("morgan")
const errorHandler = require("errorhandler")

// instantial express application 
let app = express()

/*
* appliy different midlewaer
*/ 
app.use(bodyParser.json())
app.use(logger("dev"))
app.use(errorHandler())

// run application
app.listen(3001)