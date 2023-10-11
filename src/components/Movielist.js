import { useState, useEffect } from 'react';
import * as React from 'react';

import { set, useForm } from "react-hook-form";




// const theme = createTheme({
//   palette: {
//     primary: red,
//     secondary: purple
//   }
// });




function Movielist() {
  const [name, setName] = useState([]);
  const [person, setPerson] = useState("John")
  const [value, setValue] = React.useState(0);
  const [star, setStar] = useState(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // console.log(localStorage);

  // setting an array empty to use for my movies array
  const [see, setSee] = useState(-1);


  const showButton = (i) => {

    setSee(i);
  };
  const [searchTerm, setSearchTerm] = useState('');
  // const[setEditing, setIsEditing] = useState(false);

  const [favorites, setFavorites] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (event) => setSearchTerm(names);

  // setting a string to use for my search term

  useEffect(() => {
    // console.log(favorites);
  }, [favorites])


  const hideButton = () => {
    // e.preventDefault();
    setSee(-1);
  };

  const names = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=32e96066`);
    const data = await response.json();
    // const response = await fetch('http://www.omdbapi.com/?s=her&apikey=32e96066');

    //fetching my data from the API and making it dynamic with the title parameter

    // console.log(data.Search);
    setName(data.Search);
    setSearchTerm('')
    //using the setName mathod to search my data in an object that contains an array of movies

  }

  const deleteMovie = (movPost, favorites) => {
    const newFavorites = favorites.filter((favs) => {
      return favs.movPoster != movPost
    });
    setFavorites(newFavorites)

  }
  // }

  // console.log(name);

  const saveMovie = (poster) => {

    var r = favorites.some(i => i.movPoster.includes(poster));

    // (!favorites[item].movPoster === yolo) 
    if (!r) {
      setFavorites((film) => {
        const shows = {
          id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
          movPoster: poster,
        }
        alert("movie added to favorites!")

        console.log(shows.movPoster);
        //  setStar(shows.movPoster);

        const returnValue = [...film, shows];



        return returnValue;


      });
    }
    else {
      alert("Movie already exists on your favorites!")
    }

  }

  return (
    // <ThemeProvider theme={theme}>

    <div>
      <div>
        <div >

          <div>

            {/* <Item> */}
            {/* <div className='container-fluid movie-app'>
              <div className='search'> */}

            <h1
              align="center"

              id="sign"


            >MOVIE LIST

            </h1>


            <div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)} >

                  <idv id="outlined-basic"
                    type="text"
                    name="movie"
                    value={searchTerm}

                    placeholder="Search for a Movie"
                    {...register("email", {
                      required: "Please enter at least one character",
                      minLength: 1

                    })}
                    error={!!errors?.email}

                    helperText={errors?.email ? errors.email.message : null}
                    sx={{ ml: 1, mt: 1, p: 2, }}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }} />


                  <button className="add-button" color="error" variant="contained" type="submit" sx={{ ml: 2, mt: 3, p: 2, }} onSubmit={(e) => names(searchTerm)}>
                    Send
                  </button>{ }

                </form>
              </div>
            </div>
            {/* </Item> */}

            {/* <div id="people">
          {person}
        </div>
        <button onClick={() => { setPerson("Bob") }}>Click</button> */}


            {/* Calling my function that runs the api call and sets it to what the user searches on button click            */}
            {/* </div> */}


            {name.length === 0 ? (<h1>no movies loaded</h1>) :


              <div>



                <div>
                  <h1 style={{ textAlign: "center" }}>Movies</h1>
                  <div direction="row" id="row">
                    {/* <div className="carousel">
                    <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false} sx={{ maxHeight: 650, width: '50%' }}> */}
                    {
                      (name.map((movie, index) => (

                        <div>
                          <div
                            sx={{ minWidth: 200, maxWidth: 220 }}
                            style={{ display: "flex" }}

                          >

                            <div onClick={() => { saveMovie(movie.Poster, setStar) }}>


                              <div
                                className="example"
                                component="img"
                                sx={{ maxHeight: 200, width: '100%', display: 'flex', flexDirection: 'row' }}
                                alt="The house from the offer."
                                src={movie.Poster}
                              />
                              {movie.Poster === star ? < div>Favorite </div> : (<p>No Favorite</p>)}


                            </div>
                          </div>
                        </div>

                      )))
                    }

                    {/* </Grid> */}
                  </div>
                </div>
              </div>
            }

            {/* <Grid xs={4}> <h1>Favorites</h1> </Grid> */}


            <div xs={12}>
              <h1 style={{ textAlign: "center" }}>Favorites</h1>
              <div container className="row" space={1}>
                {

                  (favorites.toReversed().map((movs, i) => (


                    <div className="card" key={movs.id}>
                      {/* <Grid item xs={2}> */}
                      <div
                        sx={{ minWidth: 200, maxWidth: 200 }}
                        style={{ display: "flex" }}
                      >

                        <div
                          onMouseEnter={() => showButton(i)}
                          onMouseLeave={hideButton}>

                          {/* <Card> */}
                          <div

                            style={{
                              marginLeft: "auto",
                              marginRight: "auto",
                              // width: "50%",
                              height: "auto",
                              zIndex: "1",
                            }}
                            className="example"
                            component="img"
                            // sx={{ maxHeight: 450, width: '100%', display: 'flex', flexDirection: 'row' }}
                            alt="The house from the offer."
                            image={movs.movPoster}

                          />

                          {/* </Card> */}

                          {/* <Butt display={see === i? 'block':'none'} /> */}




                          <button

                            style={{ maxWidth: '130px', display: see === i ? 'block' : 'none' }} onClick={() => { deleteMovie(movs.movPoster, favorites) }}>
                            Delete HERE</button>

                        </div>
                      </div>
                      {/* </Grid> */}
                    </div>



                  )))
                  // </div>
                }
              </div>
            </div>





          </div>

        </div>
      </div>
    </div>
    // </ThemeProvider>

  );
}

export default Movielist;