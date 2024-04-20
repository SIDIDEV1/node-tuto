import { createReadStream } from 'node:fs'
import { createServer } from 'node:http'


const server = createServer((req, res) => {
    const file = createReadStream('index.html')
    file.pipe(res)
})

server.listen('8888')