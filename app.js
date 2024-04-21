import { createServer } from 'node:http'
import { findTodos } from './functions/todos_storage.js'

createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const url = new URL(req.url, `http://${req.headers.host}`)
    if (url.pathname === '/todos') {
        const todos = await findTodos()
        res.write(JSON.stringify(todos))
    } else {
        res.writeHead(404)
    }
    res.end()
}).listen(3000)