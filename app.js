import { readFile } from 'node:fs/promises'

const content = await readFile('text.txt', { encoding: 'utf8' })

console.log(content);
console.log('content');
