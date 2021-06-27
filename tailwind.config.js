module.exports = {
   corePlugins: {
      ring: false,
   },
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
            pink: {
               DEFAULT: '#FFC0CB',
               50: '#FFFFFF',
               100: '#FFFFFF',
               200: '#FFFFFF',
               300: '#FFFFFF',
               400: '#FFF3F5',
               500: '#FFC0CB',
               600: '#FF8DA1',
               700: '#FF5A77',
               800: '#FF274D',
               900: '#F3002A',
            },
            orange: {
               DEFAULT: '#FFA500',
               50: '#FFF6E5',
               100: '#FFEDCC',
               200: '#FFDB99',
               300: '#FFC966',
               400: '#FFB733',
               500: '#FFA500',
               600: '#CC8400',
               700: '#996300',
               800: '#664200',
               900: '#332100',
            },
         },
         height: {
            menu: 'calc(100vh - 62px)',
         },
         boxShadow: {
            neon: '0px 0px 6px 3px #ffed00',
         },
         fontFamily: {
            alegreya: '"Alegreya Sans"',
         },
         backgroundImage: {
            bebebidas: "url('../public/bebebidas.png')",
            journal: "url('../public/journal-app-2.png')",
            devtter: "url('../public/devter.png')",
         },
         backgroundSize: {
            '200%': '200% 200%',
         },
         animation: {
            iris: 'iris 4s ease infinite',
         },
         keyframes: {
            iris: {
               '0% 100%': { 'background-position': '0% 57%' },
               '50%': { 'background-position': '100% 44%' },
            },
         },
      },
   },
   variants: {
      scrollbar: ['rounded'],
   },
   plugins: [require('tailwind-scrollbar')],
};
