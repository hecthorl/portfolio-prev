import { HiMenu, HiX } from 'react-icons/hi';
const Buttontoggle = ({ onClick, isActive }) => {
   return (
      <button onClick={onClick} className="toogle-btn">
         {isActive ? <HiX /> : <HiMenu />}
      </button>
   );
};

export default Buttontoggle;
