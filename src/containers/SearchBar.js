import React, { useState, Fragment } from "react";

import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const history = useHistory();

  const updateURL = (query) => {
    if (query) {
      history.push(`/search/?q=${query}`);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    updateURL(event.target.elements.artistSearch.value);
    setInputValue("");
  };

  const handleOnChange = (event) => {
    setInputValue(event.currentTarget.value);
  };

  return (
   
      <h3>Search for an Artist</h3>
      <div className="section__form splitter">
        <form id="search-form" onSubmit={handleSearchSubmit}>
          <input
            onChange={handleOnChange}
            value={inputValue}
            type="text"
            name="q"
            aria-label="Search"
            id="artistSearch"
          />
          <button type="submit">Search</button>
        </form>
      </div>
  
  );
};

export default SearchBar;
