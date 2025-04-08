import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef();

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }; 
0
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d] text-white px-6 py-4 md:py-5 shadow-sm border-b border-white/10">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
        
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-yellow-300 cursor-pointer select-none">
          FilmSage
        </div>

        {/* Dropdowns */}
        <div ref={dropdownRef} className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base">
          
          {/* Genre */}
          <div className="relative">
            <button onClick={() => handleDropdownToggle("genre")} className="hover:text-red-400 transition">
              Genre ▾
            </button>
            {activeDropdown === "genre" && (
              <div className="absolute top-full mt-2 w-40 bg-[#1a1a1a] text-white rounded-md shadow-lg border border-white/10">
                {["Action", "Comedy", "Drama", "Romance", "Sci-Fi", "Thriller"].map((genre) => (
                  <div
                    key={genre}
                    className="px-3 py-2 hover:bg-white/10 cursor-pointer transition"
                  >
                    {genre}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Year */}
          <div className="relative">
            <button onClick={() => handleDropdownToggle("year")} className="hover:text-red-400 transition">
              Year ▾
            </button>
            {activeDropdown === "year" && (
              <div className="absolute top-full mt-2 w-40 bg-[#1a1a1a] text-white rounded-md shadow-lg border border-white/10">
                {["2024", "2023", "2022", "2020s", "2010s", "Classics"].map((year) => (
                  <div
                    key={year}
                    className="px-3 py-2 hover:bg-white/10 cursor-pointer transition"
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Language */}
          <div className="relative">
            <button onClick={() => handleDropdownToggle("language")} className="hover:text-red-400 transition">
              Language ▾
            </button>
            {activeDropdown === "language" && (
              <div className="absolute top-full mt-2 w-40 bg-[#1a1a1a] text-white rounded-md shadow-lg border border-white/10">
                {["English", "Hindi", "Tamil", "Spanish", "Korean", "French"].map((lang) => (
                  <div
                    key={lang}
                    className="px-3 py-2 hover:bg-white/10 cursor-pointer transition"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Director */}
            <div>
            <button className="hover:text-red-400 transition">
                Director
            </button>
            </div>

        </div>

        {/* Right: Sign In Button */}
        <div>
          <button className="px-4 py-1.5 rounded-md bg-gradient-to-tr from-red-600 to-pink-500 hover:from-pink-500 hover:to-yellow-400 transition font-medium shadow-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
