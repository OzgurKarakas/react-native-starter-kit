module.exports = {
  root: true,
  extends: ['@react-native'],
  parserOptions: {
    requireConfigFile: false, 
  },
  overrides: [
    {
      files: ['babel.config.js', 'metro.config.js', 'tailwind.config.js'],
      env: {
        node: true,
      },
      parserOptions: {
        requireConfigFile: false,
      },
    },
  ],
};
