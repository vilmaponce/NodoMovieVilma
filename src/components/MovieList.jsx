import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ addToWatchlist }) => {
  const movies = [
    { id: 1, title: "The Shining", image: "./assets/img/image_01.png" },
    { id: 2, title: "Parasite", image: "./assets/img/image_02.png" },
    { id: 3, title: "Inception", image: "./assets/img/image_03.png" },
    { id: 4, title: "The Dark Knight", image: "./assets/img/image_04.png" },
    { id: 5, title: "Interstellar", image: "./assets/img/image_05.png" },
    { id: 6, title: "Pulp Fiction", image: "./assets/img/image_06.png" },
    { id: 7, title: "The Matrix", image: "./assets/img/image_07.png" },
    { id: 8, title: "Fight Club", image: "./assets/img/image_08.png" },
    { id: 9, title: "The Godfather", image: "./assets/img/image_09.png" },
    { id: 10, title: "Forrest Gump", image: "./assets/img/image_10.png" },
    { id: 11, title: "The Shawshank Redemption", image: "./assets/img/image_11.png" },
    { id: 12, title: "Gladiator", image: "./assets/img/image_12.png" },
    { id: 13, title: "The Lord of the Rings: The Return of the King", image: "./assets/img/image_13.png" },
    { id: 14, title: "The Silence of the Lambs", image: "./assets/img/image_14.png" },
    { id: 15, title: "The Social Network", image: "./assets/img/image_15.png" },
  ];

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} addToWatchlist={addToWatchlist} />
      ))}
    </>
  );
};

export default MovieList;
