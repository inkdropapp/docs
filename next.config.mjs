import withMarkdoc from '@markdoc/next.js'

import withSearch from './src/markdoc/search.mjs'

// Markdoc generates each `page.md` into a Next.js page module. On Next 16 the
// React Server Components transform refuses a `metadata` export unless the
// module is compiled in the server layer, and @markdoc/next.js registers its
// loader without one, so the generated page is seen as a client module. Tag
// the markdoc page modules with the RSC layer so page-level metadata exports
// are accepted again.
const RSC_LAYER = 'rsc'

function withMarkdocRscLayer(nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (options.isServer) {
        for (const rule of config.module.rules) {
          if (!Array.isArray(rule.use)) continue

          const usesMarkdocLoader = rule.use.some(
            (use) =>
              typeof use === 'object' &&
              typeof use.loader === 'string' &&
              use.loader.includes('@markdoc/next.js'),
          )
          if (!usesMarkdocLoader) continue

          rule.layer = RSC_LAYER
          rule.use = rule.use.map((use) =>
            typeof use === 'object' &&
            typeof use.loader === 'string' &&
            use.loader.includes('next-swc-loader')
              ? { ...use, options: { ...use.options, bundleLayer: RSC_LAYER } }
              : use,
          )
        }
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
}

export default withSearch(
  withMarkdoc({
    schemaPath: './src/markdoc',
    nextjsExports: ['metadata', 'revalidate'],
  })(withMarkdocRscLayer(nextConfig)),
)
