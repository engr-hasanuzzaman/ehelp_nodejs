const fs = require("fs")
const path = require("path")
const csv = require("csvtojson")

let csvPath = path.join(__dirname, "customer-data.csv")
let jsonPath = path.join(__dirname, "customer-data.json")

function saveJson(path, jsonData){
    fs.writeFile(jsonPath, jsonData, (error) => {
        if(error) return console.error(error)
    })
}

console.log(' start parsing file')
console.log('csvfile path is ', csvPath, fs.existsSync(csvPath))
csv()
    .fromFile(csvPath)
    .on("end_parsed",(jsonArrObj)=>{
        console.log('csv data parse to json array')
        saveJson(jsonPath, JSON.stringify(jsonArrObj))
    })
    .on("done",(error)=>{
        console.error(`csv parsing end with error ${error}`)
    })

