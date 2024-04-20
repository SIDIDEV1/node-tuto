import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const path = dirname(fileURLToPath(import.meta.url))
const file = join(path, 'demo.txt')

console.log(await readFile(file, { encoding: 'utf8' }))
