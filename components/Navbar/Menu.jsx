import { Switch } from '@headlessui/react';
import Li from '../Li';
import { HiMoon, HiSun } from 'react-icons/hi';
import useLocalStorage from 'hooks/useLocalStorage';

const Menu = ({ className }) => {
   const { theme, setTheme } = useLocalStorage();

   return (
      <nav>
         <ul className={className}>
            <div className="flex items-center">
               <HiSun className="menu-icon" />
               <Switch
                  checked={theme}
                  onChange={setTheme}
                  className={`${
                     theme ? 'bg-cyan-100' : 'bg-cyan-800'
                  } toggle-theme`}
               >
                  <span className="sr-only">Use setting</span>
                  <span
                     aria-hidden="true"
                     className={`${
                        theme
                           ? 'translate-x-9 bg-cyan-800'
                           : 'translate-x-0 bg-cyan-100'
                     } toggle-theme-pointer`}
                  />
               </Switch>
               <HiMoon className="menu-icon" />
            </div>
            <Li content="Sobre mí" href="#skills" className="menu-li" />
            <Li content="Proyectos" href="#proyects" className="menu-li" />
            <Li content="Contacto" href="#contact" className="menu-li" />
         </ul>
      </nav>
   );
};
export default Menu;
