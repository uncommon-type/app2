import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../components/Spinner";
import RelatedArtistsList from "../components/RelatedArtistsList";
import TopTracksList from "../components/TopTracksList";
import ArtistImage from "../components/ArtistImage";
import ErrorMessage from "../components/ErrorMessage";

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
        if (data[0]?.error) {
          throw new Error(data[0].error.message);
        }
        setData(data);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setError(error);
        setStatus("error");
      }
    };
    fetchArtistDetails(id);
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return isSuccess ? (
    data.length > 0 ? (
      <section className="app__section wrapper" id="main-content">
        <div className="splitter2 gap-top">
          <article className="artist-infogroup flow radius">
            <div className="artist-infogroup__inner flow">
              <div className="info stack">
                <ArtistImage artist={data[2]} />
                {data[1].artists.length ? (
                  <RelatedArtistsList relatedArtists={data[1].artists} />
                ) : null}
              </div>
            </div>
          </article>

          <article className="tracks-infogroup flow radius bg-primary color-light">
            <TopTracksList tracks={data[0].tracks} />
          </article>
        </div>
      </section>
    ) : (
      <ErrorMessage error={error} />
    )
  ) : null;
};

export default ViewArtistDetails;
