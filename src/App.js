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
  const [banner, setBanner] = useState("");
  const [star, setStar] = useState(null);

  useEffect(() => {
    // console.log(favorites);
  }, [favorites])

  const saveMovie = (poster, title) => {

    const r = favorites.some(i => i.movPoster.includes(poster, title));
    // console.log("Hello");

    // (!favorites[item].movPoster === yolo) 
    if (!r) {
      setBanner("Movie added!")
      setTimeout(() => setBanner(""), 2000);
      setFavorites((film) => {
        const shows = {
          id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
          movPoster: poster,
          movTitle: title
        }
        // alert("movie added to favorites!")
        // console.log(shows.movTitle);
        // console.log(shows.movPoster);
        // console.log(shows);
        //  setStar(shows.movPoster);

        const returnValue = [...film, shows];
        return returnValue;


      });
    }
    else {
      setBanner("Movie already exists in your favorites")
      setTimeout(() => setBanner(""), 2000);
    }

  }
  
  return (
    <div className="App" style={{ backgroundSize: "cover", backgroundImage: `url("img/theatre.jpg")` }}>
      <Movielist star={star} setStar={setStar} saveMovie={saveMovie} banner={setBanner} setBanner={setBanner} slideFavoriteLeft={slideFavoriteLeft} slideFavoriteRight={slideFavoriteRight}  favorites={favorites} setFavorites={setFavorites} useState ={useState}/>
      <Favorites slideFavoriteLeft={slideFavoriteLeft} slideFavoriteRight={slideFavoriteRight} favorites={favorites} setFavorites={setFavorites} useState ={useState}/>
      {/* <Favorites slideFavoriteLeft={slideFavoriteLeft} /> */}
      {/* <Movielist /> */}
    </div>
  );
  
}

export default App;
