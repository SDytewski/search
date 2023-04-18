import { useState, useEffect } from 'react';


function Starwars() {
    const [character, setCharacter] = useState([]);

    // setting an array empty to use for my movies array

    const [searchWars, setSearchWars] = useState('');

    // setting a string to use for my search term

    var jedi = {

        "count": 82,

        "next": '',

        "previous": null,

        "results": [

            {

                name: "Luke Skywalker",

                height: "172",

                mass: "77",

                hair_color: "blond",

                skin_color: "fair",

                eye_color: "blue",

                birth_year: "19BBY",

                gender: "male",





                species: [],



                created: "2014-12-09T13:50:51.644000Z",

                edited: "2014-12-20T21:17:56.891000Z",



            },

            {

                name: "C-3PO",

                height: "167",

                mass: "75",

                hair_color: "n/a",

                skin_color: "gold",

                eye_color: "yellow",

                birth_year: "112BBY",

                gender: "n/a",



                "vehicles": [],

                "starships": [],

                created: "2014-12-10T15:10:51.357000Z",

                edited: "2014-12-20T21:17:50.309000Z",



            },

            {

                name: "R2-D2",

                height: "96",

                mass: "32",

                hair_color: "n/a",

                skin_color: "white, blue",

                eye_color: "red",

                birth_year: "33BBY",

                gender: "n/a",



                "vehicles": [],

                "starships": [],

                created: "2014-12-10T15:11:50.376000Z",

                edited: "2014-12-20T21:17:50.311000Z",



            },

            {

                name: "Darth Vader",

                height: "202",

                mass: "136",

                hair_color: "none",

                skin_color: "white",

                eye_color: "yellow",

                birth_year: "41.9BBY",

                gender: "male",

                species: [],

                "vehicles": [],



                created: "2014-12-10T15:18:20.704000Z",

                edited: "2014-12-20T21:17:50.313000Z",



            },

            {

                name: "Leia Organa",

                height: "150",

                mass: "49",

                hair_color: "brown",

                skin_color: "light",

                eye_color: "brown",

                birth_year: "19BBY",

                gender: "female",



                "starships": [],

                created: "2014-12-10T15:20:09.791000Z",

                edited: "2014-12-20T21:17:50.315000Z",



            },

            {

                name: "Owen Lars",

                height: "178",

                mass: "120",

                hair_color: "brown, grey",

                skin_color: "light",

                eye_color: "blue",

                birth_year: "52BBY",

                gender: "male",




                species: [],

                "vehicles": [],

                "starships": [],

                created: "2014-12-10T15:52:14.024000Z",

                edited: "2014-12-20T21:17:50.317000Z",



            },

            {

                name: "Beru Whitesun lars",

                height: "165",

                mass: "75",

                hair_color: "brown",

                skin_color: "light",

                eye_color: "blue",

                birth_year: "47BBY",

                gender: "female",



            },

            {

                name: "R5-D4",

                height: "97",

                mass: "32",

                hair_color: "n/a",

                skin_color: "white, red",

                eye_color: "red",

                birth_year: "unknown",

                gender: "n/a",



            },

            {

                name: "Biggs Darklighter",

                height: "183",

                mass: "84",

                hair_color: "black",

                skin_color: "light",

                eye_color: "brown",

                birth_year: "24BBY",

                gender: "male",





            },

            {

                name: "Obi-Wan Kenobi",

                height: "182",

                mass: "77",

                hair_color: "auburn, white",

                skin_color: "fair",

                eye_color: "blue-gray",

                birth_year: "57BBY",

                gender: "male",



                "films": [



                ],

                species: [],





                created: "2014-12-10T16:16:29.192000Z",

                edited: "2014-12-20T21:17:50.325000Z",



            }

        ]

    }

    function show(character) {
        const filteredArray = jedi.results.filter((e) => e.name !== character )
        setCharacter(filteredArray)
        
        // { return (
        //     <div>
              
        //         <h1>Character</h1>
        //         <p>{filteredArray}</p>
              
        //       </div>
              
        // )}
        
    

   
    // setCharacter(filteredArray)
    // setCharacter(data.Search);
    // setSearchTerm('')
    // User types a search in the search box which is equal to my State for searching
    //That state is tied

    // const listItems = jedi.results.map((d) => <li key={d.name}>{d.name}</li>);


    return (
        <div className='container-fluid movie-app'>

            <div className='search'>
                <input
                    placeholder='Remove a Character'
                    value={searchWars}
                    onChange={(e) => setSearchWars(e.target.value)}
                />

                {/* setting the value to my search and on change calling the method to update the value to what the user types       */}
                <button

                    alt='search'
                    onClick={(e) => show(searchWars)}
                >
                    Search
                </button>
                {/* <div>
            {filteredArray.map((person, index) => (
                <div key={index}>
                <h1>{person.name}</h1>
                </div>
            ))
            }
                   
                </div> */}

                {/* Calling my function that runs the api call and sets it to what the user searches on button click            */}
            </div>
            <div className='row'>
                {/* {character.length === 0 ? (<h1>no movies loaded</h1>) : (name.map((movie, index) => (
                    <div key={index}>
                        <h1>{movie.Title}</h1>
                        <img src={movie.Poster} width="300" height="300"></img>
                    </div>
                )) */}


            </div>
        </div>
    );
}
}

export default Starwars;