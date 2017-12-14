const http = require("http")
const port = 3000

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("This is first nodejs http server\n")
}).listen(port)

console.info(`Server running at http://localhost:${port}`)