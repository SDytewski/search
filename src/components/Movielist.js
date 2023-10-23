import { useState, useEffect } from 'react';
import * as React from 'react';
import { TERipple } from 'tw-elements-react';
import { set, useForm } from "react-hook-form";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';





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

          <div className="p-4">

            {/* <Item> */}
            {/* <div className='container-fluid movie-app'>
              <div className='search'> */}

            <h1
              align="center"

              id="sign"
              className="text-7xl p-8"


            >MOVIE LIST

            </h1>


            <div>

              <div className="p-8 md:w-96 mx-auto">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">

                  <input
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    type="search"
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
                    }}
                  />

                  <TERipple>
                    <button type="submit" className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" id="button-addon3" sx={{ ml: 2, mt: 3, p: 2, }} onClick={(e) => { names(searchTerm); handleSubmit(onSubmit) }}>
                      Send
                    </button>
                  </TERipple>


                </div>
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
                  <h1 align="center" className="text-4xl pb-2">Movies</h1>
                  <div>
                    
                    <div id='slider' className="relative flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    <MdChevronLeft size={40} className="ml-10"/>
                    {
                      (name.map((movie, index) => (

                        // <div>
                        //   <div
                        //     sx={{ minWidth: 200, maxWidth: 220 }}
                        //     style={{ display: "flex" }}

                        //   >

                        <div id="space" >


                          <img
                            className="min-w-[160px] max-h-[260px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 shrink-0"
                            // component="img"
                            // sx={{ maxHeight: 200, width: '100%', display: 'flex', flexDirection: 'row' }}
                            alt="The house from the offer."
                            src={movie.Poster}
                            onClick={() => { saveMovie(movie.Poster, setStar) }}
                          />
                          {movie.Poster === star ? < div>Favorite </div> : (<p>No Favorite</p>)}


                        </div>
                        //   </div>
                        // </div>

                      )))
                    }

                    {/* </Grid> */}
                    <MdChevronRight size={40}/>
                    </div>
                   
                  </div>
                </div>
              </div>
            }

            {/* <Grid xs={4}> <h1>Favorites</h1> </Grid> */}


            <div>
              <h1 align="center" className="text-4xl p-8">Favorites</h1>
              <div container className="relative flex items-center">
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