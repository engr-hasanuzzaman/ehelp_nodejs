const https = require('https')

const url = 'singleappdev.robi.com.bd'

const options = {
    hostname: url,
    // port: 443,
    path: '/api/v1/advertisements',
    method: 'GET',
    headers: {

    }
}

const req = https.request(options, (res) => {
    let buff = ''

    res.on('data', (chunk) => {
        buff += chunk
    })

    res.on('end', () => {
        try {
            let parseData = JSON.parse(buff)
            console.info('parsing data is ', parseData)
        } catch (e) {
          console.error('error during parsing json', e.message)            
        }
    })
}).on('error', (e) => {
    console.error('error during get request is', e.message)
})

req.end()