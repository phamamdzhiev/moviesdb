const determineVoteAvgColor = (score) => {
  if (score >= 7.9) {
    return "after:border-green-500";
  } else if (score >= 5) {
    return "after:border-yellow-500";
  } else {
    return "after:border-red-500";
  }
};

const MovieSingleton = ({ image, title, date, vote_average }) => {
  return (
    <div className="shadow-md overflow-hidden rounded-md">
      <div>
        <img
          className="w-full"
          src={
            image
              ? `https://image.tmdb.org/t/p/w300/${image}`
              : "https://www.movienewz.com/img/films/poster-holder.jpg"
          }
          alt={title}
        />
      </div>
      <div className="pt-6 px-3 pb-3 relative">
        <div
          className={`absolute top-0 -translate-y-1/2 text-white text-sm bg-[#081c22] h-10 w-10 rounded-full flex items-center justify-center after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-[85%] after:h-[85%] after:rounded-full after:border-2 ${determineVoteAvgColor(
            vote_average
          )} `}
        >
          <span title="Average Vote Score">
            {Number(vote_average).toFixed(1)}
          </span>
        </div>
        <h2
          title={title}
          className="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden"
        >
          {title}
        </h2>
        <p className="text-base text-gray-500">
          {new Date(date).toLocaleString("en-Gb", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default MovieSingleton;
