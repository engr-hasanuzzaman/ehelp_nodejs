const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const morgan = require("morgan")

app.use(bodyParse.json())
app.use(morgan("dev"))

let profile = {
    username: "hasanuzzaman",
    email: "hasan@gmail.coml",
    url: "http://test.com"
}

app.get("/profile", (req, res) => {
    res.send(profile)
})

// create profile
app.post("/profile", (req, res) => {
    profile = req.body
    console.log("profile created", profile)
    res.sendStatus(201)
})

// update profile
app.put("/profile", (req, res) => {
    Object.assign(profile, req.body)
    console.log("after updating profile value is ", profile)
    req.tatus(204).send('{"success": "true"}')
})

// delete
app.delete("/profile", (req, res) => {
    profile = {}
    console.log("deleted", profile)
    res.sendStatus(204)
})

app.use((error, req, res, next) => {
   if(error) res.status(500).send(error)
})

app.listen(3001)