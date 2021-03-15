import React, { Fragment, useState } from "react";

import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const history = useHistory();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Fragment>
      <h3>Search for an Artist</h3>
      <div className="section__form splitter">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            value={inputValue}
            onChange={handleOnChange}
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
