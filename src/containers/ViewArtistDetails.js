import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  const { id } = useParams();

  useEffect(() => {
    if (!id.length) {
      return;
    }

    setStatus("loading");

    const fetchArtistDetails = async (id) => {
      try {
        const res = await fetch(
          `/.netlify/functions/getArtistDetails?id=${id}`
        );

        const data = await res.json();
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtistDetails(id);
  }, [id]);

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
