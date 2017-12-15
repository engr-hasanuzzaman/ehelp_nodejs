const https = require('https')
const fs = require('fs')
const path = require('path')

module.exports.download = function(url){
   return https.get(url, (res) => {
        let buff = ''

        res.on('data', (chunk) => {
            buff += chunk
        })

        res.on('end', () => {
          saveData(path.join(__dirname, 't2.txt'), buff)
        })
    }).on('error', (error) => {
        console.log(`fetching url ${url} has been faild for ${error.message}`)
        return ''
    })
}

function saveData(file_name, data){
    fs.writeFile(file_name, data, (error) => {
        if (error) return console.error(error)
        console.log("Writing is done.")
    })
}