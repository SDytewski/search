import { useState, useEffect, useRef } from 'react';
import * as React from 'react';
import { set, useForm } from "react-hook-form";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const slideFavoriteLeft = () => {
    var slider = document.getElementById('sliderFav')
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideFavoriteRight = () => {
    var slider = document.getElementById('sliderFav')
    slider.scrollLeft = slider.scrollLeft +
      500;
  }

function Favorites({ favorites, showButton, hideButton, deleteMovie, see}) {

    return (
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

                                    <div className="min-w-[160px] min-h-[260px] max-h-[260px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 shrink-0"
                                        onMouseEnter={() => showButton(i)}
                                        onMouseLeave={hideButton}>

                                        {/* <Card> */}
                                        <img


                                            className="min-w-[160px] min-h-[260px] max-h-[260px] inline-block p-2"
                                            component="img"
                                            // sx={{ maxHeight: 450, width: '100%', display: 'flex', flexDirection: 'row' }}
                                            alt="The house from the offer."
                                            src={movs.movPoster}
                                            onClick={() => { deleteMovie(movs.movPoster, favorites) }}

                                        />

                                        <div class="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center p-5">
                                            <div style={{ maxWidth: '230px', display: see === i ? 'block' : 'none' }} className="">

                                                <button id="lost" className="text-white mb-2 p-2" onClick={() => { deleteMovie(movs.movPoster, favorites) }}><div className="text-rose-500">DELETE</div> {movs.movTitle}</button>


                            
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )))
                    }
                </div>
                <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideFavoriteRight}> <MdChevronRight size={40} color="white" /> </div>
            </div>
        </div>


);
}

export default Favorites;
