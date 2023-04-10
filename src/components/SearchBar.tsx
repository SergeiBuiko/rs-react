import React, { useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [input, setInput] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('searchValue') as string);
    return initialValue || '';
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => localStorage.setItem('searchValue', JSON.stringify(input)), [input]);

  return (
    <div>
      <label>
        Enter a product:
        <input className="search-field" type="text" value={input} onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBar;
