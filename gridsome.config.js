// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Charcuter.io',
  plugins: [
    'gridsome-plugin-tailwindcss',

    {
      use: '@gridsome/plugin-google-analytics',
      options: { id: 'UA-159162278-2' },
    },
  ]
}
