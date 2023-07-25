/** @type {import('next').NextConfig} */
const nextConfig = {
 
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL
  },
  images: {
      domains: ['admin.agrilfoods.com'],   
  },

 
 
  webp: {
    preset: "default",
    quality: 100,
  },
  
  //Internationalization
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },


  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },

}

module.exports = nextConfig 
