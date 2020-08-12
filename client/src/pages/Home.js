import React, { useState } from "react";
import MovieList from "../components/MovieList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      <CategoryMenu setCategory={setCategory} />
      <MovieList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;
