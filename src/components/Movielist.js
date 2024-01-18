import { useState, useEffect, useRef } from 'react';
import * as React from 'react';
import { set, useForm } from "react-hook-form";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { TbHeartOff } from 'react-icons/tb'
// import { FaSearch } from "react-icons/fa";


function Movielist({ view, showTitle, hideButton, saveMovie, banner, favorites }) {
  const [name, setName] = useState([]);
  const [star, setStar] = useState(null);

  //Slider for Movies List

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 200;

  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 200;

  }

  const inputEl = useRef();

  const style = { color: "#ff0000", fontSize: "1.5em", stroke: "black", strokeWidth: "5", borderWidth:"5", border:"black" }

  const [searchTerm, setSearchTerm] = useState('');
  // const [favorites, setFavorites] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = () => setSearchTerm(names);

  const names = async (title) => {

    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=32e96066`);
    const data = await response.json();
    //fetching my data from the API and making it dynamic with the title parameter

    console.log(data.Search);

    setName(data.Search);
    setSearchTerm('');
  }

  const handleOnSubmit = (event) => {
    // write your function here
    event.preventDefault()
  }

  function handleReset(e) {
    e.preventDefault();
  }

  return (

    <body className="theatre1">
      <div>
        <div >
          <div className="p-9">
            <h1
              align="center"
              id="sign"
              className="text-7xl p-8"
            >
              MOVIE LIST
            </h1>
            {/* <div> */}
              <div className="mt-10 p-16 h-3/6 grid place-content-center">
                {/* <div className="relative mb-4 flex w-full flex-wrap items-stretch"> */}
                  <form onSubmit={handleSubmit(onSubmit)} className="input w-full">
                    <div className="" >
                      <input
                        // className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none white:border-neutral-600 white:text-neutral-200 dark:placeholder:text-white-200 dark:focus:border-primary"
                        className="bg-slate-190 h-10 w-96 p-3"
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
                        // sx={{ ml: 1, mt: 1, p: 2, }}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                        }}
                      />
                      {/* <FaSearch className='-ml-9'/> */}
                      <button type="submit" className="bg-transparent hover:bg-rose-700 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded ml-1" id="button-send" onClick={(e) => { names(searchTerm); handleReset(e) }}>
                        Send
                      </button>
                    </div>
                  </form>
                {/* </div> */}
              </div>
            {/* </div> */}
            {/* Calling my function that runs the api call and sets it to what the user searches on button click            */}
            {/* </div> */}
            {name?.length === 0 ? (<h1 align="center" className="text-white text-4xl p-8">Search for a Movie!</h1>) :
              <div>
                {banner == "" ? <div align="center" id="banner" className="text-white text-4xl p-4 m-5 items-center">Click on image button to add a movie to favorites</div> :
                  <div className="items-center">
                    <div align="center" id="banner" className="text-white text-4xl p-4 m-5 bg-rose-600 items-center">{banner}
                      {/* </div> */}

                    </div>
                  </div>}
                {/* Search Results                   */}
                <h1 align="center" className="text-white text-4xl p-4">Movies</h1>
                <div className='relative flex items-center'>
                  <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft}><MdChevronLeft size={40} color="white" /></div>
                  <div id='slider' className="relative flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {name ?
                      (name.map((movie, index) => (
                        <div>
                          <div className="container mx-auto w-1/2 p-1 relative">
                            <div className="min-w-[160px] min-h-[260px] max-h-[360px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 shrink-0"
                              onMouseEnter={() => showTitle(index)}
                              onMouseLeave={hideButton}
                            >
                              {/* <div className="pl-2 pr-2 items-center"> */}
                              <img
                                className="text-white min-w-[160px] min-h-[260px] max-h-[260px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 shrink-0 border-2 border-white"
                                // component="img"
                                // sx={{ maxHeight: 200, width: '100%', display: 'flex', flexDirection: 'row' }}
                                
                                src={(movie.Poster !=="N/A") ? movie.Poster:"https://www.movienewsletters.net/photos/000000H1.jpg"}
                              // onClick={() => {
                              //   // console.log("something")
                              //   saveMovie(movie.Poster, movie.Title, setStar)
                              // }}
                              />
                              {/* <div className="text-white">{movie.Title}</div> */}
                              {/* <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center"
                                onClick={() => {
                                  // console.log("something")
                                  saveMovie(movie.Poster, movie.Title, setStar)
                                }}> */}
                                 {favorites.some(i => i.movPoster.includes(movie.Poster)) ? < div align="center" style={style} id="heart"> <AiFillHeart /> </div> : (<div align="center" className=""></div>)}
                              <div class="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center p-5">
                             
                              <div style={{ maxWidth: '230px', display: view === index ? 'block' : 'none' }} id="coast" className="">
                                <button className="lost text-white mb-2 p-2"
                                  onClick={() => {
                                    // console.log("something")
                                    saveMovie(movie.Poster, movie.Title, setStar)
                                  }}>
                                    <div id="yo" className="text-rose-500">ADD FAVORITE</div>
                                </button>
                              </div>
                              </div>
                            </div>

                          

                          </div>
                        </div>

                        // </div>
                      )))

                      :
                      // <div>
                      <h4 align="center" className="text-rose-200 text-2xl p-8">
                        No movies found, search again
                      </h4>
                    }
                    {/* </Grid> */}

                  </div>
                  <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight}> <MdChevronRight size={40} color="white" /> </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </body>
  );
}

export default Movielist;
