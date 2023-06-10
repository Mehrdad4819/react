import React from "react";

const SearchBox = ({searchChange}) => {
  return (
    <div className="p-2 flex items-center justify-center">
      <input
        className="p-2 rounded mb-4 border-2 border-slate-400 
                   focus:outline-none focus:border-emerald-400 focus:bg-emerald-50"
        type="serach"
        placeholder="robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
