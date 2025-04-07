const moods = ["Romantic", "Action", "Thriller", "Comedy", "Horror", "Sci-Fi"];

const MoodFilter = ({ onMoodSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onMoodSelect(mood)}
          className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-indigo-600 transition"
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodFilter;
