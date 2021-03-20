import React from "react";

const TopTrackPlayer = ({ track }) => (
  <div className="player_container">
    <audio className="player" src={track.preview_url} controls loop=""></audio>
  </div>
);

export default TopTrackPlayer;
