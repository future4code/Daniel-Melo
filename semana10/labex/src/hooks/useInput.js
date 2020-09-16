import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => setValue(initialValue);

  return [value, reset, handleInputChange];
};

export default useInput;
