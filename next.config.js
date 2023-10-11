/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const svgLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...svgLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },

      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: svgLoaderRule.issuer,
        resourceQuery: { not: [...svgLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  // Remove default configurations with undesireable results
                  {
                    name: 'preset-default',
                    params: {
                      overrides: { removeViewBox: false, cleanupIDs: false },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    svgLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = nextConfig
