import React from "react";

import { Link } from "react-router-dom";

const SearchResultsTableRow = ({
  id,
  name,
  genres,
  followers,
  popularity,
  images,
}) => (
  <tr>
    <th scope="row">
      <div className="avatar">
        <figure className="avatar__img aspect-ratio-square">
          <img
            src={
              (images && images[0] && images[0].url) ||
              "https://placehold.it/160x160"
            }
            alt={name}
          />
        </figure>
        <p>{name}</p>
      </div>
    </th>
    <td>
      <span className="pill radius bg-tertiary color-light">
        {genres.length === 0 ? "N/A" : genres.slice(0, 2).join(", ")}
      </span>
    </td>
    <td>
      <span>{followers.total}</span>
    </td>
    <td>
      <span>{popularity}</span>
    </td>
  </tr>
);

export default SearchResultsTableRow;
