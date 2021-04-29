/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/services': path.resolve(__dirname, 'src/services'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/contexts': path.resolve(__dirname, 'src/contexts')
    }
  },
};