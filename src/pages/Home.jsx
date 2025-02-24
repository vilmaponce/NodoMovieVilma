import React from "react";
import MovieList from "../components/MovieList";

const Home = ({ addToWatchlist }) => {
  return (
    <main className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <MovieList addToWatchlist={addToWatchlist} />
      </div>
    </main>
  );
};

export default Home;