import React from "react";

import TopTrackPlayer from "./TopTrackPlayer";

const TopTrack = () => {
  return (
    <tr>
      <th scope="row">
        <div className="cluster">
          <div className="intermediary-wrapper">
            <p className="intermediary-wrapper__track">Hung Up</p>
            <p className="intermediary-wrapper__album font-size:1">
              <strong>Confessions on a Dance Floor</strong>
            </p>
          </div>
        </div>

        <TopTrackPlayer />
      </th>
      <td>
        <span>74</span>
      </td>
    </tr>
  );
};

export default TopTrack;
