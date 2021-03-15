require("dotenv").config({ path: `${__dirname}/.env` });

const fetch = require("node-fetch");

const getRefreshToken = async () => {
  try {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${process.env.BASE_64_ENCODED_CLIENT_CREDENTIALS}`,
      },
      body: "grant_type=client_credentials",
    });
    const data = await result.json();
    return data.access_token;
  } catch (error) {
    console.log(error);
  }
};

exports.handler = async ({ queryStringParameters }) => {
  const { id } = queryStringParameters;
  const baseURL = "https://api.spotify.com/v1/artists/";
  const topTracksEndpoint = `${baseURL}${id}/top-tracks?market=US`;
  const relatedArtistsEndpoint = `${baseURL}${id}/related-artists`;
  const artistListEndpoint = `${baseURL}${id}`;
  const urls = [topTracksEndpoint, relatedArtistsEndpoint, artistListEndpoint];

  if (!process.env.REFRESH_TOKEN) {
    process.env.REFRESH_TOKEN = await getRefreshToken();
  }

  try {
    let fetchedInfo = await Promise.all(
      urls.map(async (url) => {
        const artistResponse = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.REFRESH_TOKEN}`,
          },
        });
        return artistResponse.json();
      })
    );

    if (fetchedInfo.error && fetchedInfo.error.status === 401) {
      process.env.REFRESH_TOKEN = await getRefreshToken();
      fetchedInfo = await Promise.all(
        urls.map(async (url) => {
          const artistResponse = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.REFRESH_TOKEN}`,
            },
          });
          return artistResponse.json();
        })
      );
    }
  } catch (error) {
    console.error(error);
  }
};
