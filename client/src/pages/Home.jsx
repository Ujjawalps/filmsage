import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import MoodFilter from "../components/MoodFilter";
import Header from "../components/Header";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/search?query=${query}`);
      setMovies(res.data);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-6">
        

      {/* Heading */}
        <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                Welcome to <span className="text-red-500">FilmSage</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-6">
                Your AI-powered movie buddy. Search by name, genre, mood or even story.
            </p>
            <div className="flex justify-center">
                <SearchBar onSearch={handleSearch} />
            </div>
            <MoodFilter onMoodSelect={(mood) => handleSearch(mood)} />
        </div>

      {/* Results */}
      {loading ? (
        <p className="text-center text-xl animate-pulse">🔍 Sage is searching...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <div className="mt-20 text-center">
  <h2 className="text-2xl font-bold mb-3">Not sure what to watch?</h2>
  <p className="text-gray-400 mb-4">Let Sage help you with mood or story-based suggestions!</p>
  <button
    className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-full transition"
    onClick={() => alert("Chatbot coming soon!")}
  >
    💬 Ask Sage
  </button>
</div>

    </div>
  );
};

export default Home;
