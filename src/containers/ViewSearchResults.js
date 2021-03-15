import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";

import Arrow from "../components/Arrow";
import SearchResultsTableRow from "../components/SearchResultsTableRow";

const ViewSearchResults = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const tableHeaders = ["name", "genre", "followers", "popularity"];

  const location = useLocation();
  const { q: searchTerm } = parse(location.search);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    setStatus("loading");

    const searchArtists = async (searchTerm) => {
      try {
        const result = await fetch(
          `/.netlify/functions/search?artist=${encodeURIComponent(searchTerm)}`
        );
        const data = await result.json();
      } catch (error) {
        console.log(error);
      }
    };
    searchArtists(searchTerm);
  }, [searchTerm]);

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
