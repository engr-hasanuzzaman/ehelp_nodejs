// basic http call
const http = require('http')
const url = 'http://nodeprogram.com'
http.get(url, (response) => {
    let rawData = '';
    let counter = 0;

    response.on('data', (chunk) => {
        rawData += chunk
        counter += 1
    })

    response.on('end', () => {
        console.log('our loading data is ' + rawData)
        console.log('couter called for ' + counter)
    })
}).on('error', (error) => {
    console.log('occuring error is ' + error)
})
