import { config } from './config.js'

export const globals = {
  assetUrl: config.assetUrl,
  baseUrl: config.baseUrl,
  imageSizes: config.imageSizes,
  metadata: {
    author: {
      name: 'Jacco Meijer',
      email: 'jacco@jaccomeijer.nl',
      url: 'https://jaccomeijer.nl',
    },
    branding: 'Green Reference',
    copyright: 'Copyright 2024 © Jacco Meijer',
    description: 'A reference implementation of the Green UI Library.',
    generator: 'esbuild',
    language: 'en',
    title: 'Green UI Library',
    url: 'https://github.com/jaccomeijer/green-lib',
    vendor: 'Made with Green UI Library',
    version: '4.0.0',
  },
}
