import { open } from 'node:fs/promises'

const file = await open('text.txt', 'a')

file.write('Lolll')

file.close()

