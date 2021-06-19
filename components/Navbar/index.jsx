import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Buttontoggle from '../Buttontoggle';
import Menu from 'components/Navbar/Menu';

const Navbar = () => {
   const [isActive, setIsActive] = useState(false);

   const bigName = isActive ? 'text-segundo' : 'text-cuarto';

   useEffect(() => {
      window.onscroll = () => setIsActive(false);
      window.onresize = () => setIsActive(false);
   }, [isActive]);

   return (
      <header className="px-3">
         <div className="header-wrapper">
            <a href="/" className={`${bigName} name-icon`}>
               Hector
            </a>
            <Menu className="hidden md:flex md:gap-14 md:text-2xl" />
            <div className="md:hidden">
               <Buttontoggle
                  isActive={isActive}
                  onClick={() => setIsActive(!isActive)}
               />
            </div>
            <Transition
               as="nav"
               className="fixed top-16 left-0 list-none z-10"
               show={isActive}
               enter="transition-transform duration-500"
               enterFrom="-translate-y-full"
               enterTo="-translate-x-0"
               //
               leave="transition-[transform, opacity] ease-in-out duration-500"
               leaveFrom="-translate-y-0 opacity-100"
               leaveTo="-translate-y-full opacity-0"
            >
               <Menu className="ul-header md:hidden" />
            </Transition>
         </div>
      </header>
   );
};

export default Navbar;
