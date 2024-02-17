const http = require('http')


const ip = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
   
    res.write('<h1>Ba-la-la-la!</h1>');
})

server.listen(port, ip, () => {
    console.log(`Server is started. Port: ${port}, host: ${ip}`)
})