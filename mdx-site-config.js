import { metadata } from './src/data/metadata.js'

const commonConfig = {
  imageSizes: {
    s: 300,
    m: 700,
    l: 1000,
  },
  metadata,
  outdir: 'dist',
}

const pagesConfig = {
  ...commonConfig,
  entryPointsGlob: 'src/pages/**/*.{mdx}',
  stripFromOutputPath: 'src/pages',
}

const componentsConfig = {
  ...commonConfig,
  entryPointsGlob: 'src/components/**/*.{mdx}',
  stripFromOutputPath: 'src/components',
}

export default {
  pages: { ...pagesConfig },
  'pages-serve': { ...pagesConfig, serve: true },
  components: { ...componentsConfig },
  'components-serve': { ...componentsConfig, serve: true },
}
