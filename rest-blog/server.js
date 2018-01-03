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

/*
* constant data
*/

let store = {
    posts: [
        {
            name: "test post name 1",
            url: "http://testpost1.com",
            text: "test post 1 lorem ipsome test post 1 lorem ipsome test post 1 lorem ipsome test post 1 lorem ipsome ",
            comments: [
                { text: "test comment1" },
                { text: "test comment2" },
                { text: "test comment3" },
                { text: "test comment4" },
                { text: "test comment5" }
            ]
        }
    ]
}

/*
* load routes from ./routes folder
*/ 
require("./routes")(app, store)

// run application
app.listen(3001)