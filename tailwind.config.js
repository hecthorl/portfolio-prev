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
            overlay:
               'linear-gradient(to right, rgb(255 255 255 / 20%) 0%, #232323fa 60%, #191919 100%)',
            overlay_r:
               'linear-gradient(to bottom, rgb(255 255 255 / 20%) 0%, #232323fa 60%, #191919 100%)',
         },
      },
   },
   variants: {
      scrollbar: ['rounded'],
   },
   plugins: [require('tailwind-scrollbar')],
};
