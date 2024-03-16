import packageJson from '../../package.json'

const version = packageJson.devDependencies['@jaccomeijer/green-lib']

export const metadata = {
  branding: {
    copyright: 'Copyright © 2024 Jacco Meijer',
    description: 'A reference implementation of the Green UI Library.',
    heading: 'Green',
    icon: 'book-open',
    url: '/',
  },
  vendor: {
    heading: 'Made with Green UI Library',
    icon: 'package',
    url: 'https://www.npmjs.com/package/@jaccomeijer/green-lib',
    version,
  },
  content: {
    generator: 'esbuild',
    language: 'en',
  },
}
