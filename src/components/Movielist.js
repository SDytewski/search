import { useState, useEffect } from 'react';


function Movielist() {
    const [name, setName] = useState([]);

    // setting an array empty to use for my movies array

    const [searchTerm, setSearchTerm] = useState('');

    // setting a string to use for my search term



    const names = async (title) => {
        const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=32e96066`);
        const data = await response.json();
        // const response = await fetch('http://www.omdbapi.com/?s=her&apikey=32e96066');

        //fetching my data from the API and making it dynamic with the title parameter

        console.log(data);
        setName(data.Search);
        setSearchTerm('')
        //using the setName mathod to search my data in an object that contains an array of movies

    }
    //     useEffect(() => {
    //     names ('her')
    // }, [])

    // On page load my movies display the results for her


    return (
        <div className='container-fluid movie-app'>
            <div className='search'>
                <input
                    placeholder='Search for moves'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* setting the value to my search and on change calling the method to update the value to what the user types       */}
                <button

                    alt='search'
                    onClick={() => {
                        names(searchTerm)
                       
                    }}>
                    Search
                </button>


                {/* Calling my function that runs the api call and sets it to what the user searches on button click            */}
            </div>
            <div className='row'>
                {name.length === 0 ? (<h1>no movies loaded</h1>) : (name.map((movie, index) => (
                    <div key={index}>
                        <h1>{movie.Title}</h1>
                        <img src={movie.Poster} width="300" height="300"></img>
                    </div>
                ))

                )}

            </div>
        </div>
    );
}

export default Movielist;