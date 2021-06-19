const StatLine = ({ progress, area }) => {
   return (
      <div>
         <div className="flex justify-between">
            <span>{area}</span>
            <span>{progress}%</span>
         </div>
         <div className="relative w-full h-1 bg-yellow-200">
            <div
               className="absolute -top-1 h-3 bg-yellow-400"
               style={{ width: `${progress}%` }}
            ></div>
         </div>
      </div>
   );
};

export default StatLine;
