import React, { useState } from 'react';

function Search({ onSearch }) {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='mb-4 flex items-start ml-3 '>
      <input
      className='bg-slate-100 p-2 rounded-md hover:shadow-lg outline-none w-full max-w-md  focus:outline-none focus:ring focus:ring-[#457b9d] transition-shadow duration-300'
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Search Products..."
      />
    </div>
  );
}

export default Search;
