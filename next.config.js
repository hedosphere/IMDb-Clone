/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        // pathname: "**",
        pathname: "/t/p/original/**",
      },
    ],
  },
};

// images: {
//   remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "image.tmdb.org",
//       port: "",
//       pathname: "**",
//     },
//   ];
// }

//  protocol: 'https',
// hostname: '**.example.com',.

// images: {
//   domains: ["image.tmdb.org"];
// }

// images: {
//   remotePatterns: [
//     {
//       protocol: "https",
//         hostname: "themoviedb.org/",
//       hostname: "image.tmdb.org/",
//       hostname: 'https://www.themoviedb.org/',
//       port: "",
//       pathname: "https://image.tmdb.org/t/p/original/**",
//     },
//   ];
// }

// images: {
//   remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "image.tmdb.org",
//       port: "",
//       pathname: "/image.tmdb.org/t/p/original/**",
//     },
//   ];
// }
module.exports = nextConfig;
