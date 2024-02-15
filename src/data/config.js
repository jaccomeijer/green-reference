const buildConfig = {
  assetUrl: '/assets/',
  baseUrl: '/green-reference',
  outdir: 'docs',
  serve: false,
}

const serveConfig = {
  assetUrl: '/assets/',
  baseUrl: '',
  outdir: 'dist',
  serve: true,
}

export const config = {
  entryPointsGlob: 'src/pages/**/*.{mdx}',
  imageSizes: {
    s: 300,
    m: 700,
    l: 1000,
  },
  initialProps: {},
  removeBundle: false,
  stripFromOutputPath: 'src/pages',
  ...(process.env.MODE === 'build' ? buildConfig : {}),
  ...(process.env.MODE === 'serve' ? serveConfig : {}),
}
