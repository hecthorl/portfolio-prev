import Li from '../Li';
import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

const Menu = ({ className }) => {
   const [enabled, setEnabled] = useState(false);

   useEffect(() => {
      enabled
         ? document.documentElement.classList.add('dark')
         : document.documentElement.classList.remove('dark');
   }, [enabled]);

   // console.log(enabled);

   return (
      <ul className={className}>
         {/* <Li content="About me" className="denied" /> */}
         <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
               enabled ? 'bg-cyan-100' : 'bg-cyan-800'
            } toggle-theme`}
         >
            <span className="sr-only">Use setting</span>
            <span
               aria-hidden="true"
               className={`${
                  enabled
                     ? 'translate-x-9 bg-cyan-800'
                     : 'translate-x-0 bg-cyan-100'
               } toggle-theme-pointer`}
            />
         </Switch>
         <Li
            content="Skills"
            href="#skills"
            className="md:hover:opacity-60 dark:text-cyan-100 text-cyan-800 transition-opacity duration-300"
         />
         <Li
            content="Proyectos"
            href="#proyects"
            className="md:hover:opacity-60 dark:text-cyan-100 text-cyan-800 transition-opacity duration-300"
         />
         <Li
            content="Contacto"
            href="#contact"
            className="md:hover:opacity-60 dark:text-cyan-100 text-cyan-800 transition-opacity duration-300"
         />
      </ul>
   );
};
export default Menu;
