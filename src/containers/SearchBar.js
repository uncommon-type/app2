import React, { useState } from "react";

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
    setInputValue(event.target.elements.artistSearch.value);
    updateURL(event.target.elements.artistSearch.value);
  };

  return (
    <section className="app__section">
      <h3>Search for an Artist</h3>
      <div className="section__form splitter">
        <form id="search-form" onSubmit={handleSearchSubmit}>
          <input
            onChange={handleSearch}
            type="text"
            name="q"
            aria-label="Search"
            id="artistSearch"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
