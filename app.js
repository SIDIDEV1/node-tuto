import { writeFile } from 'node:fs/promises'


await writeFile('text.txt', 'Sido test', {
    flag: 'a'
})

