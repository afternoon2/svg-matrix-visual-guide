const withFonts = require('next-fonts');
const withMDX = require('@next/mdx')();

module.exports = withFonts(
  withMDX({
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx']
  })
)