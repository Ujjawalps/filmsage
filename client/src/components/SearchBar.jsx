import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search any movie..."
        className="px-4 py-2 rounded-md bg-gray-800 text-white w-84 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
        >
        Search
       </button>

    </form>
  );
};

export default SearchBar;
