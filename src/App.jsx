import React, { useState } from "react";
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import WatchlistModal from "./components/WatchListModal.jsx";
import useWatchlist from "./hooks/useWatchList.js";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <Home addToWatchlist={addToWatchlist} />
      <WatchlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        watchlist={watchlist}
        removeFromWatchlist={removeFromWatchlist}
      />
      <Footer />
    </div>
  );
}

export default App;
