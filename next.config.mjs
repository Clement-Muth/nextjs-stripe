/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
  }
};

export default nextConfig;
