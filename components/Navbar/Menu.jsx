import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';
import Li from '../Li';
import { HiMoon, HiSun } from 'react-icons/hi';

const Menu = ({ className }) => {
   const [enabled, setEnabled] = useState(false);

   useEffect(() => {
      enabled
         ? document.documentElement.classList.add('dark')
         : document.documentElement.classList.remove('dark');
   }, [enabled]);

   return (
      <ul className={className}>
         <div className="flex items-center">
            <HiSun className="menu-icon" />
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
            <HiMoon className="menu-icon" />
         </div>
         <Li content="Skills" href="#skills" className="menu-li" />
         <Li content="Proyectos" href="#proyects" className="menu-li" />
         <Li content="Contacto" href="#contact" className="menu-li" />
      </ul>
   );
};
export default Menu;
