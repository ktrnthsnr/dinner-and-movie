import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

import { QUERY_MOVIES } from "../utils/queries";
import spinner from '../assets/spinner.gif'

function Detail() {
  const { id } = useParams();

  const [currentMovie, setCurrentMovie] = useState({})

  const { loading, data } = useQuery(QUERY_MOVIES);

  const movies = data?.movies || [];

  useEffect(() => {
    if (movies.length) {
      setCurrentMovie(movies.find(movie => movie._id === id));
    }
  }, [movies, id]);

  return (
    <>
      {currentMovie ? (
        <div className="container my-1">
          <Link to="/">
            ← Back to Movie
          </Link>

          <h2>{currentMovie.name}</h2>

          <p>
            {currentMovie.description}
          </p>

          <p>
            <strong>Price:</strong>
            ${currentMovie.time}
            {" "}
            <button>
              Add to Cart
            </button>
            <button>
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentMovie.image}`}
            alt={currentMovie.name}
          />
        </div>
      ) : null}
      {
        loading ? <img src={spinner} alt="loading" /> : null
      }
    </>
  );
};

export default Detail;
