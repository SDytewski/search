import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel';
import { Paper} from '@mui/material';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Movielist() {
    const [name, setName] = useState([]);
        
    console.log(localStorage);

    // setting an array empty to use for my movies array

    const [searchTerm, setSearchTerm] = useState('');
   const [films, setFilms] = useState([]);

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

    const saveMovie = () => {

        setName((prevMovies) => {
            // id: prevMovies.length === 0 ? 1 : prevMovies[prevMovies.length -1].id + 1

        });
    }


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
                    onClick={() => names(searchTerm)}
                    >
                    Search
                </button>


                {/* Calling my function that runs the api call and sets it to what the user searches on button click            */}
            </div>
        
            <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          
          {name.length === 0 ? (<h1>no movies loaded</h1>) : 
          <div class="poster">
          <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false}>
          {
          
            (name.map((movie, index) => (
            

 <Paper
 className="example"
  component="img"
  sx={{ height: '50%', width: '100%', display: 'flex', flexDirection: 'row' }}
  alt="The house from the offer."
  src={movie.Poster}
  >

  </Paper>



             
           
              
            ))
          
           
            )
            
          }
          </Carousel>
          </div>

            }  
                   
          {/* </Grid> */}
         
        </Container>
        



            {/* <div className='row'>
                {name.length === 0 ? (<h1>no movies loaded</h1>) : (name.map((movie, index) => (
                    <div key={index}>
                        <h1>{movie.Title}</h1>
                        <img src={movie.Poster} width="300" height="300"></img>
                    </div>
                ))

                )}

            </div>
        </div> */}
        </div>
        
    );
}

export default Movielist;