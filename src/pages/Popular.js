import MovieSingleton from "../components/MovieSingleton";
import { useState } from "react";
import usePopularMovies from "../hooks/usePopularMovies";

const Popular = () => {
  const [page, setPage] = useState(1);
  const content = usePopularMovies(page);

  return (
    <div className="container">
      <h1 className="page-title">Popular This Week</h1>
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
      <div className="flex items-center justify-between my-8">
        <button
          className="rounded-md bg-slate-600 text-white px-5 py-2"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev page
        </button>
        <p className="font-bold text-xl text-slate-600">Page: {page}</p>
        <button
          className="rounded-md bg-slate-600 text-white px-5 py-2"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default Popular;
