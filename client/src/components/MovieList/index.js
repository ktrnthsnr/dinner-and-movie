import React from "react";
import { useQuery } from '@apollo/react-hooks';

import MovieItem from "../MovieItem";
import { QUERY_MOVIES } from "../../utils/queries";
import spinner from "../../assets/spinner.gif"

function MovieList({ currentCategory }) {
  const { loading, data } = useQuery(QUERY_MOVIES);

  const movies = data?.movies || [];

  function filterMovies() {
    if (!currentCategory) {
      return movies;
    }

    return movies.filter(movie => movie.category._id === currentCategory);
  }

  return (
    <div className="my-2">
      <h2>Our Movie Selection:</h2>
      {movies.length ? (
        <div className="flex-row">
            {filterMovies().map(movie => (
                <MovieItem
                 
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any movie choices yet!</h3>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </div>
  );
}

export default MovieList;
