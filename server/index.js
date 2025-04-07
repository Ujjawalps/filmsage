const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// TMDb Search Route
app.get("/api/search", async (req, res) => {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: "Query param is required" });

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          query: query,
        },
      }
    );

    res.json(response.data.results);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
