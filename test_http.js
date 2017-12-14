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

// load and parse json data
const jsonUrl = 'http://singleappdev.robi.com.bd/api/v1/advertisements'
http.get(jsonUrl, (res) => {
    let buff = ''
    res.on('data', (chunk) => {
        buff += chunk
    })

    res.on('end', () => {
     try {
         let parseData = JSON.parse(buff)
         console.info('pasing json data is', buff)
     } catch (e) {
         console.error('error occure during parsing json', e.message)
     }
    })
}).on('error', (e) => {
    console.error('error during call metho is', e.message)
})
