import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState('');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

export default FilterProvider;
