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

const searchArtist = async (artist) => {
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REFRESH_TOKEN}`,
      },
    }
  );
  return res.json();
};

exports.handler = async ({ queryStringParameters }) => {
  const { artist } = queryStringParameters;

  if (!process.env.REFRESH_TOKEN) {
    process.env.REFRESH_TOKEN = await getRefreshToken();
  }

  try {
    let res = await searchArtist(artist);
  } catch (error) {
    console.log(error);
  }
};
