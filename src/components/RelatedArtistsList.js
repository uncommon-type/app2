import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const RelatedArtistsList = ({ relatedArtists }) => (
  <Fragment>
    <h4
      className="info__item__header text-500 related-artists-header"
      id="related-artists-header"
    >
      Related Artists
    </h4>
    <div className="info__item box related-artists-container">
      <div className="cluster2">
        <div className="related-artists-list">
          {relatedArtists.map((artist) => (
            <figure className="related-artist">
              <picture>
                <img
                  className="related-artist__avatar"
                  src={
                    artist.images.length > 1
                      ? artist.images[2].url
                      : "https://placehold.it/220x220"
                  }
                  alt={artist.name}
                />
              </picture>
              <figcaption className="image__caption">{artist.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  </Fragment>
);

export default RelatedArtistsList;
