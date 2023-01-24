/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path+',
        destination: 'https://api-for-assignment-todo-app.vercel.app/api/:path+',
        
      },
      
    ];
  },
}

module.exports = nextConfig
