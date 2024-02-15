import { globals } from './src/data/globals.js'
import { build } from '@jaccomeijer/green-build'

const config = {
  assetUrlPrefix: globals.assetUrlPrefix,
  entryPointsGlob: 'src/pages/**/*.{mdx}',
  imageSizes: globals.imageSizes,
  initialProps: {},
  outdir: 'dist',
  removeBundle: false,
  serve: false,
  stripFromOutputPath: 'src/pages',
}

if (process.argv[2] === 'serve') {
  config.serve = true
}

build(config)
