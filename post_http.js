const http = require('http')

const url = 'singleappinitial.robi.com.bd'

const options = {
    hostname: url,
    port: 80,
    path: '/api/v1/tokens',
    method: 'POST',
    headers: {

    }
}

const req = http.request(options, (res) => {
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