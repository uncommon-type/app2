import React, { Fragment, useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  const handleSearch = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Fragment>
      <h3>Search for an Artist</h3>
      <div className="section__form splitter">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            value={inputValue}
            onChange={handleSearch}
            type="text"
            name="q"
            aria-label="Search"
            id="artistSearch"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </Fragment>
  );
};

export default SearchBar;
