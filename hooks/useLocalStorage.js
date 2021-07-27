import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = () => {
   const dd = useCallback(() => {
      if (typeof window !== 'undefined') {
         return localStorage.getItem('theme');
      }
   });

   const [theme, setTheme] = useState(dd());

   useEffect(() => {
      if (!theme) {
         document.documentElement.classList.remove('dark');
         localStorage.removeItem('theme');
         setTheme(null);
      } else {
         localStorage.setItem('theme', 'dark');
         document.documentElement.classList.add('dark');
      }
   }, [theme]);

   return { theme, setTheme };
};

export default useLocalStorage;
