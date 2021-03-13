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
  const { artist } = queryStringParameters;

  if (!process.env.REFRESH_TOKEN) {
    process.env.REFRESH_TOKEN = await getRefreshToken();
  }

  return {
    statusCode: 200,
    body: "",
  };
};
