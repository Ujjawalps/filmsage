import axios from "axios";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY; // keep this in .env file
const BASE_URL = "https://api.themoviedb.org/3";

export const getMoviesByMood = async (mood, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: mood,
        page,
        include_adult: false,
      },
    });

    return {
      results: response.data.results,
      totalPages: response.data.total_pages,
    };
  } catch (error) {
    console.error("TMDB Mood Fetch Error:", error.message);
    return { results: [], totalPages: 0 };
  }
};
