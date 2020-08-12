import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"

function MovieItem(item) {
  const {
    image,
    name,
    _id,
    time,
    select
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/movies/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{select} {pluralize("item", select)} in stock</div>
        <span>${time}</span>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default MovieItem;
