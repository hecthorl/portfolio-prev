module.exports = {
   mode: 'jit',
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            cyan: {
               DEFAULT: '#06B6D4',
               50: '#C2F5FD',
               100: '#A9F0FD',
               200: '#78E8FB',
               300: '#46E0FA',
               400: '#15D7F8',
               500: '#06B6D4',
               600: '#058BA2',
               700: '#036171',
               800: '#02363F',
               900: '#000C0E',
            },
         },
         boxShadow: {
            hero: '5px 7px 20px 0px #000000c7',
         },
         height: {
            menu: 'calc(100vh - 62px)',
         },
         fontFamily: {
            alegreya: '"Alegreya Sans"',
         },
         backgroundImage: {
            bebebidas: "url('../public/bebebidas.png')",
            journal: "url('../public/journal-app-2.png')",
            devtter: "url('../public/devter.png')",
         },
      },
   },
   variants: {
      scrollbar: ['rounded'],
   },
   plugins: [require('tailwind-scrollbar')],
};
