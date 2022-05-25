import React, { useState } from 'react';

function Searchbar(props) {
  const { searchFilter } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);

    searchFilter(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="search">Search Foods</label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Searchbar;
