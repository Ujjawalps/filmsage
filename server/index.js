require("dotenv").config()
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express(); 

// ✅ CORS should be here
app.use(
  cors({
    origin: ["http://localhost:5173"], // include both ports
    credentials: true,
  })
);

// ✅ Body parser for JSON
app.use(express.json());

// 🎯 TMDb Search Route
app.get("/api/search", async (req, res) => {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: "Query param is required" });

  try {
    const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: query,
      },
    });

    res.json(response.data.results);
  } catch (err) {
    console.error("TMDb API Error:");
    console.error("Message:", err.message);
    console.error("Config:", err.config);
    console.error("Response Data:", err.response?.data); // 👈 log TMDb error
    res.status(500).json({ error: "TMDB API failed", details: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("🎬 FilmSage API is running");
});


// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
