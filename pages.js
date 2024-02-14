import { metadata } from './src/data/metadata.js'

import { build } from '@jaccomeijer/green-build'

const config = {
  entryPointsGlob: 'src/pages/**/*.{mdx}',
  imageSizes: {
    s: 300,
    m: 700,
    l: 1000,
  },
  metadata,
  outdir: 'docs',
  removeBundle: true,
  serve: false,
  stripFromOutputPath: 'src/pages',
}

if (process.argv[2] === 'serve') {
  config.serve = true
}

build(config)
