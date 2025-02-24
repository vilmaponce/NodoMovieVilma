import React from "react";
import Button from "./Button";

const MovieCard = ({ movie, addToWatchlist }) => {
  return (

    
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-pink-600 hover:border-pink-800 hover:ring-4 hover:ring-pink-500">

      {/* Enlace a Wikipedia */}
      <a
        href={`https://es.wikipedia.org/wiki/${encodeURIComponent(movie.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline mt-2 block text-sm"
      >
        Ver en Wikipedia
      </a>


      {/* Imagen de la película */}
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-56 object-cover rounded-t-xl"
      />
      <div className="p-5 text-center">
        {/* Título de la película */}
        <h2 className="text-white text-xl font-bold mb-3 tracking-wide">
          {movie.title}
        </h2>
        {/* Botón Add to Watchlist */}
        <Button
          onClick={() => addToWatchlist(movie)}
          className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          icon="ph-plus"
        >
          Agregar a Watchlist
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;

