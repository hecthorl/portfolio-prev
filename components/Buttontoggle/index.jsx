import { HiMenu, HiX } from 'react-icons/hi';
const Buttontoggle = ({ onClick, isActive }) => {
   return (
      <button
         onClick={onClick}
         className="text-5xl text-tercero focus:outline-none"
      >
         {isActive ? <HiX /> : <HiMenu />}
      </button>
   );
};

export default Buttontoggle;
