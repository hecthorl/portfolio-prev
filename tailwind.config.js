module.exports = {
   mode: 'jit',
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            primero: '#213250',
            segundo: '#3E6273',
            tercero: '#C9C9CD',
            cuarto: '#F9F7F3',
            quinto: '#DC4139',
            // img: '#5b8ca2',
         },
         boxShadow: {
            img: '-11px -11px #5b8ca2',
         },
         animation: {
            loading: 'charge 0.5s linear infinite',
         },
         keyframes: {
            charge: {
               to: { transform: 'rotate(360deg)' },
            },
         },
         height: {
            menu: 'calc(100vh - 62px)',
            img: '425px',
         },
         fontFamily: {
            alegreya: '"Alegreya Sans"',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
