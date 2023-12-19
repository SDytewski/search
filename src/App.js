import './App.css';
import Starwars from './components/Starwars.js'
import Movielist from './components/Movielist.js'
import Favorites from './components/Favorites.js'
import { useState, useEffect, useRef } from 'react';



function App() {




  const [favorites, setFavorites] = useState([]);
  const [banner, setBanner] = useState("");
  const [star, setStar] = useState(null);
  const [see, setSee] = useState(-1);

  useEffect(() => {
    // console.log(favorites);
  }, [favorites])

  const showButton = (i) => {

    setSee(i);
  };

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
      <Movielist  see={see} setSee={setSee} star={star} setStar={setStar} saveMovie={saveMovie} banner={banner} setBanner={setBanner} setBanner={setBanner} favorites={favorites} setFavorites={setFavorites} useState ={useState}/>
      <Favorites showButton={showButton} favorites={favorites} setFavorites={setFavorites} useState ={useState}/>
      {/* <Favorites slideFavoriteLeft={slideFavoriteLeft} /> */}
      {/* <Movielist /> */}
    </div>
  );
  
}

export default App;
