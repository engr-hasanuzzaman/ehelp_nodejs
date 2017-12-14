const fs = require('fs')
const path = require('path')
const passingData = process.argv.slice(',').pop()
console.log('passing args is ' + passingData);
fs.writeFile('test.txt', passingData, (error) => {
    if (error) return console.error(error)
    console.log('Writing is done.')
});

fs.readFile('test.txt', (error, data) => {
    if(error) return console.error(error);
    console.log('content of the file is ' + data);
})