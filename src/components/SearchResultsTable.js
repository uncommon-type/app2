import React, { useState } from "react";

import SearchResultsTableRow from "../components/SearchResultsTableRow";
import Arrow from "../components/Arrow";

const SearchResultsTable = ({ artists, searchTerm }) => {
  const [sort, setSort] = useState({
    isDescending: true,
  });

  const handleSort = () => {
    const isDescending = !sort.isDescending;
    setSort({ isDescending });
  };

  const tableHeaders = ["name", "genre", "followers", "popularity"];

  return (
    <div className="artist-list-view flow radius">
      <h4>Artists with the name of: {searchTerm}</h4>
      <small className="scroll-message">(scroll to see more)</small>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, i) =>
              i === tableHeaders.length - 1 ? (
                <th
                  scope="col"
                  key={i}
                  aria-sort="none"
                  className="popularity-col"
                >
                  {header}
                  <button className="sorting-button">
                    <Arrow />
                  </button>
                </th>
              ) : (
                <th scope="col" key={i}>
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {artists.map(
            ({ id, name, genres, followers, popularity, images }) => (
              <SearchResultsTableRow
                key={id}
                name={name}
                genres={genres}
                followers={followers}
                popularity={popularity}
                images={images}
                id={id}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultsTable;
