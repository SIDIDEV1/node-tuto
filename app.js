import { createServer } from 'node:http'


const server = createServer((req, res) => {
    res.write('Helloww')
    res.end()
})

server.listen('8888')