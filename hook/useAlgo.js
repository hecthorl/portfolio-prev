import { useEffect, useState } from 'react';

const useAlgo = () => {
   const [isActive, setIsActive] = useState(false);
   useEffect(() => {
      window.onscroll = () => setIsActive(false);
   }, [isActive]);
   return { isActive, setIsActive };
};

export default useAlgo;
