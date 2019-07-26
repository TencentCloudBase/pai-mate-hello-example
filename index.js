const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hello, world!!!')
})

const port = 3000
server.listen(port, 'localhost', () => {
  console.log(`server listening on port ${port}`)
})
