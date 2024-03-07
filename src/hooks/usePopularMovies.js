import React, { useState, useEffect } from "react";

const useTrendingContent = (page) => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&page=${page}`
    );
    const data = await response.json();
    setContent(data.results);
    window.scroll(0, 0);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return content;
};

export default useTrendingContent;
