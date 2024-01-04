import './App.css';
import Starwars from './components/Starwars.js'
import Movielist from './components/Movielist.js'
import Favorites from './components/Favorites.js'
import { useState, useEffect, useRef } from 'react';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';



function App() {
  const [movList, setMovList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [banner, setBanner] = useState("");
  const [see, setSee] = useState(-1);
  const [view, setView] = useState(-1);

  const moviescollectionRef = collection(db, "movies")

  useEffect(() => {
    const getMovList = async () => {
      try {
        const data = await getDocs(moviescollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(), 
          id:doc.id
        }));
        console.log(data);
      }
     catch (err) {
      console.error(err);
    }
  };
  getMovList();
    // console.log(favorites);
  }, []);



  const showButton = (i) => {
    setSee(i);
  };

  const hideButton = () => {
    setSee(-1);
    setView(-1)
  };

  const showTitle = (index) => {
    setView(index);
  };

  const deleteMovie = (movPost, favorites) => {
    const newFavorites = favorites.filter((favs) => {
      return favs.movPoster != movPost
    });
    setFavorites(newFavorites)

  }

  const saveMovie = (poster, title) => {
    const r = favorites.some(i => i.movPoster.includes(poster, title));
    if (!r) {
      setBanner("Movie added!")
      setTimeout(() => setBanner(""), 2000);
      setFavorites((film) => {
        const shows = {
          id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
          movPoster: poster,
          movTitle: title
        }
        // console.log(shows);
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
      <Movielist showTitle={showTitle} view={view} hideButton={hideButton} saveMovie={saveMovie} banner={banner} favorites={favorites} />
      <Favorites favorites={favorites} deleteMovie={deleteMovie} showButton={showButton} hideButton={hideButton} see={see} />
    </div>
  );

}

export default App;
