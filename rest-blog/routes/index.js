const fs = require("fs")

module.exports = function(app, store){
    fs.readdirSync(__dirname).forEach(file => {
        if(file === "index.js" || file.substr(file.lastIndexOf(".") + 1) !== "js") return
        let name = file.substr(0, file.indexOf("."))
        // console.log("require route file name is " + name)
        require("./" + name)(app, store)     
    })
}