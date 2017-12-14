const path = require("path")

const firstPath = path.join("first", "seconde", "3rd")
const secondPath = path.join(__dirname, "first", "second", "3rd")
console.log("first log is " + firstPath)
console.log("last log is " + secondPath)