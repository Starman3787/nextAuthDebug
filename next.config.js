/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      NEXTAUTH_URL: "http://localhost:3005", // set as needed
      NEXTAUTH_SECRET: "tOp_seCrET_cOdE",
      DISCORD_ID: "1234567891011121314",
      DISCORD_SECRET: "aNotHeR_vErY_seCReT_cOdE"
    }
  }
  
  module.exports = nextConfig
  