import './App.css';
import Starwars from './components/Starwars.js'
import Movielist from './components/Movielist.js'
import Favorites from './components/Favorites.js'
import { useState, useEffect, useRef } from 'react';


function App() {
  const slideFavoriteLeft = () => {
    var slider = document.getElementById('sliderFav')
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideFavoriteRight = () => {
    var slider = document.getElementById('sliderFav')
    slider.scrollLeft = slider.scrollLeft +
      500;
  }

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // console.log(favorites);
  }, [favorites])

  return (
    <div className="App">
      <Movielist slideFavoriteLeft={slideFavoriteLeft} slideFavoriteRight={slideFavoriteRight} />
      <Favorites slideFavoriteLeft={slideFavoriteLeft} slideFavoriteRight={slideFavoriteRight} favorites={favorites} setFavorites={setFavorites} useState ={useState}/>
      {/* <Favorites slideFavoriteLeft={slideFavoriteLeft} /> */}
      {/* <Movielist /> */}
    </div>
  );
  
}

export default App;
