import React, { useState } from "react";

import Arrow from "../components/Arrow";
import SearchResultsTableRow from "../components/SearchResultsTableRow";

const ViewSearchResults = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const tableHeaders = ["name", "genre", "followers", "popularity"];

  return (
    <div className="artist-list-view flow radius">
      <h4>Artists with the name of: madonna</h4>
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
          <SearchResultsTableRow />
        </tbody>
      </table>
    </div>
  );
};

export default ViewSearchResults;
