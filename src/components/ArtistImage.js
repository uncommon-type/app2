import React from "react";

const ArtistImage = ({ artist }) => (
  <div className="info__item box">
    <div className="info__item__image stack">
      <h3 className="info__item__header text-500">Madonna</h3>
      <img
        className="image__item"
        src={artist?.images[0]?.url || "https://placehold.it/640x640"}
        alt={artist.name}
      />
    </div>
  </div>
);

export default ArtistImage;
