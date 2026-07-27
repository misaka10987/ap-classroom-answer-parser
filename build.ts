import { build, spawn } from 'bun'
import UnpluginTypia from '@ryoppippi/unplugin-typia/bun'
import { mkdir } from 'fs/promises'
import { readFile } from 'fs/promises'
import { writeFile } from 'fs/promises'
import userscriptConfig from './userscript.config'
import { render } from '@jeiea/userscript-metadata'

await spawn({ cmd: ['bun', 'run', 'check'] }).exited

await build({
  entrypoints: ['src/index.ts'],
  outdir: 'out',
  target: 'browser',
  minify: true,
  plugins: [UnpluginTypia({ log: false })],
})

for (const dir of ['out', 'dist']) {
  await mkdir(dir, { recursive: true })
}

const meta = render(userscriptConfig)

const body = await readFile('out/index.js')

await writeFile('dist/user.js', meta + '\n' + body)
