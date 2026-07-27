import pack from './package.json' with { type: 'json' }
import { type Metadata } from '@jeiea/userscript-metadata'

const config: Metadata = {
  '@name': [pack.name],
  '@namespace': [pack.homepage],
  '@version': [pack.version],
  '@author': [pack.author.name],
  '@description': [pack.description],
  '@match': ['*://*/*'],
  '@grant': ['GM_registerMenuCommand', 'GM.openInTab'],
}

export default config
