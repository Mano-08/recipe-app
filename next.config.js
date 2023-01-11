/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_ID: process.env.API_ID,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
