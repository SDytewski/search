import './App.css';
import Starwars from './components/Starwars.js'
import Movielist from './components/Movielist.js'
import Favorites from './components/Favorites.js'
import { useState, useEffect, useRef } from 'react';
import { db } from './config/firebase';
import { getDocs, query, serverTimestamp, collection, orderBy, addDoc, deleteDoc, doc } from 'firebase/firestore';



function App() {
  const [movList, setMovList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [banner, setBanner] = useState("");
  const [see, setSee] = useState(-1);
  const [view, setView] = useState(-1);
  
  
 

  const moviescollectionRef = collection(db, "movies");
  
  
 


  // moviescollectionRef.orderBy("movTitle")
  
//   const fetchData = async () => {
//     let list = [];
//     const querySnapshot = await getDocs(
//       query(collection(database, 'cases'), orderBy("timestamp"))
//     );
//     querySnapshot.forEach((doc) => {
//         list.push({ id: doc.id, ...doc.data() });
//     });
//     setDataCases(list);
// };



  // query(collection(database, 'cases'), orderBy("timestamp"))

  const shows = async () => {
    try {
      // const hey = await moviescollectionRef.orderBy('title').get();
     
  // const querySnapshot = await getDocs(q);
      const q = query(moviescollectionRef, orderBy("timestamp", "desc"))
      const data = await getDocs(q);
      // setIsLoading(true); 
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,  
      }));

      setFavorites(filteredData)
      // setIsLoading(true);
      // console.log(filteredData);
    }
    catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    // console.log(shows);
    // query(moviescollectionRef(db, 'movies'), orderBy("timestamp"))
    // query(moviescollectionRef, orderBy("movies"));
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
      const submitMovie = async () => {
        try {
          await addDoc(moviescollectionRef, {
            // id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
            movPoster: poster,
            movTitle:  title,
            timestamp: serverTimestamp()
          });
          shows();
        } catch (err) {
          console.error(err);
        }
         
      }
      await submitMovie();
      // setFavorites((prevFilms) => {
      //   // const shows = {
      //   //   id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
      //   //   movPoster: poster,
      //   //   movTitle: title
      //   // }
  
      //   // console.log(shows)
      //     // console.log(shows);
          
      //     const returnValue = [...prevFilms, submitMovie]; 

      //     return returnValue ;
      //   });
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