import { spawn } from 'bun'
import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname } from 'path'

const compile = spawn({
  cmd: [
    'bun',
    'build',
    'src/index.ts',
    '--bundle',
    '--outfile=build/index.js',
    '--minify',
  ],
})

await compile.exited

const meta = readFileSync('meta.js')
mkdirSync(dirname('build/index.js'), { recursive: true })
const body = readFileSync('build/index.js')
mkdirSync(dirname('dist/ap-classroom-answer-parser.user.js'), {
  recursive: true,
})
writeFileSync('dist/ap-classroom-answer-parser.user.js', meta + '\n' + body)
