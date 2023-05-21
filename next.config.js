/** @type {import('next').NextConfig} */
//const nextConfig = {
//  reactStrictMode: true,
//}

//module.exports = nextConfig
//const isGithub = process.env.GITHUB_ACTIONS || false
//const isProduction = process.env.NODE_ENV === 'production';
const isGitHub = process.env.GITHUB_ACTIONS;

let assetPrefix = ''
let basePath = '/'

if (isGitHub) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}