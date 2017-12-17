const express = require("express")
const app = express()

app.get("/", (_req, res) => {
    res.send("Hello Express")
})

app.listen(3001)