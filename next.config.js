/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_ID: process.env.API_ID,
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['edamam-product-images.s3.amazonaws.com',
      'www.seriouseats.com',
      'i0.wp.com',
      'honestcooking.com',
      'hips.hearstapps.com',
      'www.simplyrecipes.com',
      'images.immediate.co.uk',
      'irepo.primecp.com',
      'whiteonricecouple.com',
      'imagesvc.meredithcorp.io',
      'images.food52.com',
      'www.foodrepublic.com'],
  },
};

module.exports = nextConfig;
