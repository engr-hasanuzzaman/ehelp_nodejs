// load and parse json data
const http = require('http'
)
const jsonUrl = 'http://singleappdev.robi.com.bd/api/v1/advertisements'
http.get(jsonUrl, (res) => {
    let buff = ''
    res.on('data', (chunk) => {
        buff += chunk
    })

    res.on('end', () => {
     try {
         console.info('buffer data is', buff)
         let parseData = JSON.parse(buff)
         console.info('pasing json data is', buff)
     } catch (e) {
         console.error('error occure during parsing json', e.message)
     }
    })
}).on('error', (e) => {
    console.error('error during call metho is', e.message)
})