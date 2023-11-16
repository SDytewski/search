import { useState, useEffect, useRef } from 'react';
import * as React from 'react';
import { set, useForm } from "react-hook-form";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import theatre1 from "../img/theatre.jpg"; 
import { AiFillHeart } from 'react-icons/ai';
import { TbHeartOff } from 'react-icons/tb'
import { BsExclamationSquare } from "react-icons/bs";


function Movielist() {
  const [name, setName] = useState([]);
  const [person, setPerson] = useState("")
  // const [count, setCount] = useState(0)
  const [value, setValue] = React.useState(0);
  const [star, setStar] = useState(null);
  const [banner, setBanner] = useState("");



  //Slider for Movies List

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;

  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;

  }

  //Slider for Favorites 

  const slideFavoriteLeft = () => {
    var slider = document.getElementById('sliderFav')
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideFavoriteRight = () => {
    var slider = document.getElementById('sliderFav')
    slider.scrollLeft = slider.scrollLeft +
      500;
  }

  const inputEl = useRef();

  const style = { color: "pink", fontSize: "1.5em", stroke: "black", strokeWidth: "5" }
  // console.log(localStorage);

  // setting an array empty to use for my movies array
  const [see, setSee] = useState(-1);


  const showButton = (i) => {

    setSee(i);
  };
  const [searchTerm, setSearchTerm] = useState('');
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
    //fetching my data from the API and making it dynamic with the title parameter

    // console.log(data.Search);

    setName(data.Search);
    setSearchTerm('')

  }

  const deleteMovie = (movPost, favorites) => {
    const newFavorites = favorites.filter((favs) => {
      return favs.movPoster != movPost
    });
    setFavorites(newFavorites)

  }


  const saveMovie = (poster) => {

    const r = favorites.some(i => i.movPoster.includes(poster));
    console.log("Hello");

    // (!favorites[item].movPoster === yolo) 
    if (!r) {
      setBanner("Movie added!")
      setTimeout(() => setBanner(""), 2000);
      setFavorites((film) => {
        const shows = {
          id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
          movPoster: poster,
        }
        // alert("movie added to favorites!")
        console.log(film);
        console.log(shows.movPoster);
        //  setStar(shows.movPoster);

        const returnValue = [...film, shows];
        return returnValue;


      });
    }
    else {
      setBanner("Movie already in your favorites")
      setTimeout(() => setBanner(""), 2000);
    }

  }

  return (

    <body className="theatre1" style={{ backgroundSize: "cover", backgroundImage: `url("img/theatre.jpg")` }}>
      <div>
        <div >

          <div className="p-4">

            <h1
              align="center"

              id="sign"
              className="text-7xl p-8"

            >MOVIE LIST

            </h1>


            <div>

              <div className="mt-10 p-6 md:w-96 mx-auto">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                  {/* <div id="person" className="text-white">{person}</div>

          <button className="text-white" onClick={()=>{setPerson("Tim");}}>Click</button> */}
                  {/* <div className="text-white">{count}</div>
                
                <button className="text-white" onClick={()=>{setCount(1+count);}}>Click</button> */}

                  <input
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none white:border-neutral-600 white:text-neutral-200 dark:placeholder:text-white-200 dark:focus:border-primary"
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

                  <button type="submit" className=" text-white relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" id="button-addon3" sx={{ ml: 2, mt: 3, p: 2, }} onClick={(e) => { names(searchTerm); handleSubmit(onSubmit) }}>
                    Send
                  </button>



                </div>
              </div>

            </div>

            {/* Calling my function that runs the api call and sets it to what the user searches on button click            */}
            {/* </div> */}


            {name?.length === 0 ? (<h1 align="center" className="text-white text-4xl p-8">Search for a Movie!</h1>) :




              <div>
                
                {banner == "" ? <div align="center" id="banner" className="text-white text-4xl p-4 m-5 items-center">Click a show or movie to add to your favorites</div> :
                  <div className="items-center">
                    <div align="center" id="banner" className="text-black text-4xl p-4 m-5 bg-red-400 items-center">{banner}
                    {/* </div> */}
                    
                  </div>
                  </div>}
                  <h1 align="center" className="text-white text-4xl p-4">Movies</h1>
                <div className='relative flex items-center'>
                  <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft}><MdChevronLeft size={40} color="white" /></div>
                  <div id='slider' className="relative flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {name ?

                      (name.map((movie, index) => (

                        <div className="pl-2 pr-2">

                          <img
                            className="min-w-[160px] min-h-[260px] max-h-[260px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 shrink-0"
                            // component="img"
                            // sx={{ maxHeight: 200, width: '100%', display: 'flex', flexDirection: 'row' }}
                            alt="No Movie Image"
                            src={movie.Poster}
                            onClick={() => {
                              console.log("something")
                              saveMovie(movie.Poster, setStar)
                            }}
                          />
                          {favorites.some(i => i.movPoster.includes(movie.Poster)) ? < div align="center" style={style}> <AiFillHeart /> </div> : (<div align="center" style={style}><TbHeartOff /></div>)}


                        </div>


                      )))

                      :
                      <div>
                        <h1 align="center" className=" text-white text-4xl p-8">
                          No Movies Found
                        </h1>
                      </div>

                    }
                    {/* </Grid> */}

                  </div>
                  <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight}> <MdChevronRight size={40} color="white" /> </div>
                </div>
              </div>

            }
            <div>
              <h1 align="center" className="text-white text-4xl p-8">Favorites</h1>

              <div className='relative flex items-center'>
                <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideFavoriteLeft}><MdChevronLeft size={40} color="white" /></div>
                <div id='sliderFav' className="relative flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                  {

                    (favorites.toReversed().map((movs, i) => (


                      <div key={movs.id}>
                        {/* <Grid item xs={2}> */}

                        <div className="container mx-auto w-1/2 p-1 relative">
                          <div
                            onMouseEnter={() => showButton(i)}
                            onMouseLeave={hideButton}>

                            {/* <Card> */}
                            <img


                              className="min-w-[160px] min-h-[260px] max-h-[260px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 shrink-0"
                              component="img"
                              // sx={{ maxHeight: 450, width: '100%', display: 'flex', flexDirection: 'row' }}
                              alt="The house from the offer."
                              src={movs.movPoster}
                              onClick={() => { deleteMovie(movs.movPoster, favorites) }}

                            />

                            <button

                              style={{ maxWidth: '230px', display: see === i ? 'block' : 'none' }} className="cursor-pointer hover:scale-105 ease-in-out duration-300 shrink-0 bg-black text-white font-bold py-2 px-4 border border-white-700 rounded absolute top-2/4 left-2/4 rounded-lg p-4" onClick={() => { deleteMovie(movs.movPoster, favorites) }}>
                              Delete</button>

                          </div>
                        </div>
                      </div>
                    )))
                  }
                </div>
                <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideFavoriteRight}> <MdChevronRight size={40} color="white" /> </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </body>

  );
}

export default Movielist;
