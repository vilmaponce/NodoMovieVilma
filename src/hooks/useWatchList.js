import { useState, useEffect } from "react";

const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  // Cargar la watchlist desde localStorage al inicio
  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  // Guardar la watchlist en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Agregar una película a la watchlist
  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  // Eliminar una película de la watchlist
  const removeFromWatchlist = (id) => {
    const updatedList = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedList);
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
};

export default useWatchlist;