import fs from 'node:fs'

const content = fs.readFile('text.txt', { encoding: 'utf8' }, (err, data) => {
    console.log(data);
})

console.log('content');
