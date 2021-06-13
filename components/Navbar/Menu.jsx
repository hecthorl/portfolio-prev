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
            className={`${enabled ? 'bg-cyan-100' : 'bg-cyan-800'}
           inline-flex flex-shrink-0 h-[25px] w-[61px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
         >
            <span className="sr-only">Use setting</span>
            <span
               aria-hidden="true"
               className={`${
                  enabled
                     ? 'translate-x-9 bg-cyan-800'
                     : 'translate-x-0 bg-cyan-100'
               }
            pointer-events-none inline-block h-[21px] w-[21px] rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
         </Switch>
         <Li content="Skills" className="denied" />
         <Li
            content="Proyectos"
            href="#proyects"
            className="md:hover:opacity-60 transition-opacity duration-300"
         />
         <Li
            content="Contacto"
            href="#contact"
            className="md:hover:opacity-60 transition-opacity duration-300"
         />
      </ul>
   );
};
export default Menu;
