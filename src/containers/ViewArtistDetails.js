import React, { useEffect, useState } from "react";
import RelatedArtistsList from "../components/RelatedArtistsList";
import TopTracksList from "../components/TopTracksList";
import ArtistImage from "../components/ArtistImage";

const ViewArtistDetails = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div className="splitter2 gap-top">
      <article className="artist-infogroup flow radius">
        <div className="artist-infogroup__inner flow">
          <div className="info stack">
            <ArtistImage />
            <RelatedArtistsList />
          </div>
        </div>
      </article>
      <TopTracksList />
    </div>
  );
};

export default ViewArtistDetails;
