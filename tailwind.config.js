module.exports = {
   mode: 'jit',
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            primero: '#23049d',
            segundo: '#aa2ee6 ',
            tercero: '#29bb89',
            cuarto: '#ff79cd',
            quinto: '#e6dd3b',
            // img: '#5b8ca2',
            scroll: '#a7a7a7',
         },
         boxShadow: {
            img: '-11px -11px #5b8ca2',
         },
         height: {
            menu: 'calc(100vh - 62px)',
         },
         fontFamily: {
            alegreya: '"Alegreya Sans"',
         },
         backgroundImage: theme => ({
            bebebidas: "url('../public/bebebidas.png')",
            journal: "url('../public/journal-app-2.png')",
            devtter: "url('../public/devter.png')",
            overlay:
               'linear-gradient(to bottom, rgb(255 255 255 / 20%) 0%, #212120 60%, #212120 100%)',
         }),
      },
   },
   variants: {
      scrollbar: ['rounded'],
   },
   plugins: [require('tailwind-scrollbar')],
};
