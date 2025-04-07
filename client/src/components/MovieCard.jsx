const MovieCard = ({ movie }) => {
    return (
      <div className="flex bg-zinc-900 rounded-xl shadow-md overflow-hidden w-full max-w-2xl hover:scale-[1.02] transition min-h-[220px] sm:min-h-[260px]">
        {/* Poster */}
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : "https://via.placeholder.com/150x225?text=No+Image"
          }
          alt={movie.title}
          className="w-32 sm:w-40 object-cover"
        />
  
        {/* Info */}
        <div className="p-4 flex flex-col justify-between flex-1 text-gray-200">
          {/* Top section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-1">{movie.title}</h2>
            <div className="text-sm flex flex-wrap gap-2 mb-2">
              {movie.release_date && (
                <span className="bg-red-600 text-white px-2 py-0.5 rounded-md text-xs font-semibold">
                  {new Date(movie.release_date).getFullYear()}
                </span>
              )}
              {movie.original_language && (
                <span className="bg-gray-800 px-2 py-0.5 rounded-md text-xs">
                  {movie.original_language.toUpperCase()}
                </span>
              )}
              {movie.vote_average && (
                <span className="bg-green-700 px-2 py-0.5 rounded-md text-xs">
                  ⭐ {movie.vote_average.toFixed(1)}
                </span>
              )}
            </div>
            {/* We'll fetch Director later */}
            <p className="text-xs italic opacity-70 mb-2">Director: To be added</p>
          </div>
  
          {/* Overview */}
          <p className="text-sm text-gray-400 line-clamp-5">{movie.overview}</p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  