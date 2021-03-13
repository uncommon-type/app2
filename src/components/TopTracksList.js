import React from "react";

import TopTrack from "./TopTrack";

const TopTracksList = () => {
  const headers = ["track", "popularity"];
  return (
    <article className="tracks-infogroup flow radius bg-primary color-light">
      <h3 className="color-secondary-shade text-400 weight-medium">
        Top Tracks
      </h3>
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th scope="col" key={i}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <TopTrack />
        </tbody>
      </table>
    </article>
  );
};

export default TopTracksList;
