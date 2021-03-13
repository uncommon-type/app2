import React from "react";

const SearchResultsTableRow = () => (
  <tr>
    <th scope="row">
      <div class="avatar">
        <figure class="avatar__img aspect-ratio-square">
          <img
            src="https://i.scdn.co/image/96b4818a65820e91e0e17fcf55a4d2213b019ad4"
            alt="Madonna"
          />
        </figure>
        <p>Madonna</p>
      </div>
    </th>
    <td>
      <span class="pill radius bg-tertiary color-light">dance pop,pop</span>
    </td>
    <td>
      <span>4855035</span>
    </td>
    <td>
      <span>81</span>
    </td>
  </tr>
);

export default SearchResultsTableRow;
