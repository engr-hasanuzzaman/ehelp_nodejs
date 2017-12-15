const downloader = require('./downloader')

let url = process.argv.slice(',').pop()
console.log('Your passing url is ', url)
let fetchingData = downloader.download(url)
console.log('parsing data is ', fetchingData)
// foo()

