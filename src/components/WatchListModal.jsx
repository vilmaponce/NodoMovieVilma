import React from "react";
import Button from "./Button";

const WatchlistModal = ({ isOpen, onClose, watchlist, removeFromWatchlist }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-shadow-medium bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-dark-primary rounded-lg p-6 relative w-full max-w-3xl max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 text-text-secondary hover:text-text-primary text-2xl"
        >
          &times;
        </Button>
        <h2 className="text-text-primary text-lg font-bold text-center mb-4">
          Your Watchlist
        </h2>
        <div className="bg-dark-secondary/900 py-10 overflow-y-auto max-h-[65vh] px-4 space-y-4">
          {watchlist.length === 0 ? (
            <p className="text-text-secondary text-center">
              <i className="bi bi-film text-secondary fs-3 mb-2 d-block"></i><br/>
              No tienes ninguna película en tu lista.
            </p>

          ) : (
            watchlist.map((movie) => (
              <div
                key={movie.id}
                className="flex items-center bg-dark-secondary rounded-lg shadow-md overflow-hidden p-4 space-x-4"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-20 h-28 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-text-primary text-lg font-bold">{movie.title}</h3>
                </div>
                <Button
                  onClick={() => removeFromWatchlist(movie.id)}
                  className="bg-state-error hover:bg-red-600 active:bg-red-700 text-text-primary"
                  icon="ph-trash"
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchlistModal;