import React from "react";

const TopTrackPlayer = () => {
  return (
    <div className="player_container">
      <audio
        className="player"
        src="https://p.scdn.co/mp3-preview/bf54eab00d276b376af52d0de2b3df1b8a21c1eb?cid=3298c471c845493c9f32c9ead5100863"
        controls
        loop=""
      ></audio>
    </div>
  );
};

export default TopTrackPlayer;
