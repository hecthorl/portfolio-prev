import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import Buttontoggle from '../Buttontoggle';
import Li from '../Li';

const Navbar = () => {
   const [isActive, setIsActive] = useState(false);
   // const ref = useRef();
   const bigName = isActive ? 'text-segundo bg-cuarto' : 'text-cuarto';

   useEffect(() => {
      window.onscroll = () => setIsActive(false);
   }, [isActive]);

   return (
      <header className={bigName + ' header-mobile'}>
         <div className="h-full">
            <Link href="/">
               <a className={bigName + ' text-3xl font-bold'}>Hector</a>
            </Link>
         </div>
         <div>
            <Buttontoggle
               isActive={isActive}
               onClick={() => setIsActive(!isActive)}
            />
         </div>
         <Transition
            as="nav"
            className="fixed top-16 left-0 list-none"
            show={isActive}
            enter="transition-transform duration-500"
            enterFrom="transform -translate-y-full"
            enterTo="transform -translate-x-0"
            //
            leave="transition-[transform, opacity] ease-in-out duration-500"
            leaveFrom="transform -translate-y-0 opacity-100"
            leaveTo="transform -translate-y-full opacity-0"
         >
            <ul className="ul-header h-menu">
               <Li content="Inicio" />
               <Li content="About me" />
               <Li content="Skills" />
               <Li content="Proyectos" href="#proyects" />
               <Li content="Contacto" href="#contact" />
            </ul>
         </Transition>
      </header>
   );
};

export default Navbar;
/**
 *
 */
