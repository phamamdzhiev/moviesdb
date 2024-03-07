import MovieSingleton from "../components/MovieSingleton";
import { useState } from "react";

const Search = () => {
  const [content, setContent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchSearch = async () => {
    if (searchText.length == 0) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&page=1&language=en-US&query=${searchText}`
      );

      const data = await response.json();

      setContent(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="page-title">Search Movies</h1>
        <div className="relative">
          <input
            placeholder="Enter movie name..."
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="w-full p-4 rounded-full text-2xl border !border-gray-300"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full"
            onClick={fetchSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        <div className="movies-grid">
          {content.length > 0 &&
            content.map((item) => (
              <MovieSingleton
                key={item.id}
                image={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                vote_average={item.vote_average}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
