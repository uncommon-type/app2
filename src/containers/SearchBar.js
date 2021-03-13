import React, { Fragment } from "react";

const SearchBar = () => {
  return (
    <Fragment>
      <h3>Search for an Artist</h3>
      <div className="section__form splitter">
        <form className="search-form">
          <input
            type="text"
            name="q"
            aria-label="Search"
            id="artistSearch"
            value=""
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </Fragment>
  );
};

export default SearchBar;
