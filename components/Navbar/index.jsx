import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import Buttontoggle from '../Buttontoggle';
import Menu from 'components/Menu';

const Navbar = () => {
   const [isActive, setIsActive] = useState(false);

   const bigName = isActive ? 'text-segundo bg-cuarto' : 'text-cuarto';

   useEffect(() => {
      window.onscroll = () => setIsActive(false);
      window.onresize = () => setIsActive(false);
   }, [isActive]);

   return (
      <header className={bigName + ' header'}>
         <div className="h-full">
            <Link href="/">
               <a className={bigName + ' text-3xl font-bold'}>Hector</a>
            </Link>
         </div>
         <Menu className="hidden md:flex md:gap-7 md:text-2xl" />

         <div className="md:hidden">
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
            <Menu className="ul-header md:hidden" />
         </Transition>
      </header>
   );
};

export default Navbar;
/**
 *
 */
