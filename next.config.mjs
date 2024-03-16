/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://127.0.0.1:5328/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  

// export default {
//     async rewrites() {
//       return [
//         {
//           source: '/api/:path*',
//           destination: 'http://127.0.0.1:5328/:path*', // Proxy to Backend
//         },
//       ];
//     },
//   };
  