import React, { Fragment } from "react";

const RelatedArtistsList = () => (
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
          <figure className="related-artist">
            <picture>
              <img
                className="related-artist__avatar"
                src="https://i.scdn.co/image/ec194152e04f08fdf28bf76aff7e272a40675aa8"
                alt="Cher"
              />
            </picture>
            <figcaption className="image__caption">Cher</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </Fragment>
);

export default RelatedArtistsList;
