import pack from './package.json' assert { type: 'json' }
import { type Metadata } from '@jeiea/userscript-metadata'

export const userscriptConfig: Metadata = {
  '@name': [pack.name],
  '@namespace': [pack.homepage],
  '@version': [pack.version],
  '@author': [pack.author.name],
  '@description': [pack.description],
  '@match': ['*://*/*'],
  '@grant': ['GM_registerMenuCommand', 'GM.openInTab'],
}
