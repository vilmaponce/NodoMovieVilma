import { useState, useEffect } from "react";

const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  // Cargar la watchlist desde localStorage al inicio
  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");

    // Si hay algo en el localStorage, procesarlo
    if (savedWatchlist) {
      const parsedWatchlist = JSON.parse(savedWatchlist);
      console.log("Cargando watchlist desde localStorage:", parsedWatchlist); // Depuración

      // Solo se actualiza si hay datos válidos en localStorage
      if (Array.isArray(parsedWatchlist)) {
        setWatchlist(parsedWatchlist);
      } else {
        setWatchlist([]); // Si no es un array válido, inicializa como array vacío
      }
    }
  }, []); // Solo se ejecuta una vez al cargar el componente

  // Guardar la watchlist en localStorage cuando cambia ( eliminar o agregar pelicula)
  useEffect(() => {
    console.log("Guardando watchlist en localStorage:", watchlist); // Depuración

    if (watchlist.length > 0) {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));// si hay elementos se guarda como string
    } else {
      localStorage.removeItem("watchlist"); // Eliminar del localStorage cuando esté vacío
    }
  }, [watchlist]);

  // Agregar una película a la watchlist
  const addToWatchlist = (movie) => {
    // Verificar si la película ya está en la watchlist ( some )
    if (!watchlist.some((m) => m.id === movie.id)) {
      const newWatchlist = [...watchlist, movie];//Se crea un nuevo array con la película añadida.
      console.log("Agregando película a la watchlist:", newWatchlist); // Depuración
      setWatchlist(newWatchlist);//Se actualiza el estado con setWatchlist.
    };
  
    // Eliminar una película de la watchlist
  }  
  const removeFromWatchlist = (id) => {
    const updatedList = watchlist.filter((movie) => movie.id !== id);//Crea una nueva lista sin la película cuyo id coincide
    console.log("Eliminando película de la watchlist:", updatedList); // Depuración
    setWatchlist(updatedList);//Actualiza el estado con la nueva lista
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };//devuelve estado y funciones
};

export default useWatchlist;

