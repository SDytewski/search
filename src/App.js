import './App.css';
import Starwars from './components/Starwars.js'
import Movielist from './components/Movielist.js'
import Favorites from './components/Favorites.js'
import { useState, useEffect, useRef } from 'react';
import { db } from './config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';



function App() {
  const [movList, setMovList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [banner, setBanner] = useState("");
  const [see, setSee] = useState(-1);
  const [view, setView] = useState(-1);

  const moviescollectionRef = collection(db, "movies")



  const shows = async () => {
    try {
      const data = await getDocs(moviescollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setFavorites(filteredData)
      console.log(filteredData);
    }
    catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    console.log(shows.filteredData);
    shows();
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

  const deleteMovie = async (id, favorites) => {
    const movieDoc = doc(db, "movies", id)
    const newFavorites = favorites.filter((favs) => {
      return favs.id != id
    });

    // getMovieList();
    await deleteDoc(movieDoc)
    setFavorites(newFavorites)

  }

  const saveMovie = async (poster, title) => {

   
    const r = favorites.some(i => i.movPoster.includes(poster, title));
    if (!r) {
      setBanner("Movie added!")
      setTimeout(() => setBanner(""), 2000);
      setFavorites((film) => {
        // const shows = {
        //   id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
        //   movPoster: poster,
        //   movTitle: title
        // }
        const submitMovie = async () => {
        try {
          await addDoc(moviescollectionRef, {
            // id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
            movPoster: poster,
            movTitle:  title
          });
          shows();
        } catch (err) {
          console.error(err);
        }
         
      }
        console.log(shows)
          // console.log(shows);
          const returnValue = [...film, submitMovie]; submitMovie();

          return returnValue ;
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