const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const morgan = require("morgan")

app.use(bodyParse.json())
app.use(morgan("dev"))
let nextId = 3

let profile = [{
    id: 1,
    username: "hasanuzzaman",
    email: "hasan@gmail.coml",
    url: "http://test.com"
},
{
    id: 2,
    username: "sumon",
    email: "sumon@gmail.coml",
    url: "http://sumon.com"
}]

// show profile
app.get("/profile", (req, res) => {
    console.log("passing query id is ", req.query.id)
    if(req.query.id) return res.send(profile[req.query.id])
    res.send(profile)
})

// create profile
app.post("/profile", (req, res) => {
    console.log("-with in profile create method", req.body)
    if(!req.body.username|| !req.body.email){
        console.log("missing parameters")
        return res.status(422).send('{ "error": "parameter missing"}')
    }
    
    let data = {
        username: req.body.username,
        email: req.body.email,
        url: req.body.url    
    };

    profile.push(data)
    // nextId += 1
    console.log("profile created", profile)
    res.sendStatus(201)
})

// update profile
app.put("/profile/:id", (req, res) => {
    console.log("req.params.id & req.body", req.params.id, req.body)
    Object.assign(profile[req.params.id], req.body)
    console.log("after updating profile value is ", profile)
    req.status(204).send('{"success": "true"}')
})

// delete
app.delete("/profile/:id", (req, res) => {
    profile.splice(req.params.id, 1)
    console.log("deleted", profile)
    res.sendStatus(204)
})

app.use((error, req, res, next) => {
   if(error) res.status(500).send(error)
})

app.listen(3001)