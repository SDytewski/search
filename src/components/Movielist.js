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
import CardActionArea from '@mui/material/CardActionArea';
import { Paper } from '@mui/material';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Movielist() {
  const [name, setName] = useState([]);

  // console.log(localStorage);

  // setting an array empty to use for my movies array

  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isSaving, setIsSaving] = useState(null);

  // setting a string to use for my search term

  useEffect(() => {
    console.log(favorites);
  }, [favorites])


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

  const saveMovie = (yolo) => {

    setFavorites((film) => {
      const shows = {
        id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
        movPoster: yolo,
      }
      return [...film, shows]
    });

    // setFavorites(current => [...current, film]);
    console.log(favorites)

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
          onClick={() => { names(searchTerm) }}
        >
          Search
        </button>


        {/* Calling my function that runs the api call and sets it to what the user searches on button click            */}
      </div>



      {name.length === 0 ? (<h1>no movies loaded</h1>) :
        <Grid container>
          <div  class="poster">
          <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false}>
            {
              (name.map((movie, index) => (
                
                  <Grid item>
                  
                  
                  <Card key={movie.id}>
                    <CardActionArea onClick={() => saveMovie(movie.Poster)}>
                      <CardMedia
                        className="example"
                        component="img"
                        sx={{ height: '50%', width: '100%', display: 'flex', flexDirection: 'row' }}
                        alt="The house from the offer."
                        src={movie.Poster}

                      />

                      {/* <Button size="large">Save</Button> */}

                    </CardActionArea>
                  </Card>
                  </Grid>
                   )) )
              }
                  </Carousel>
                  
                  <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false}>
                    {
                  (favorites.toReversed().map((movs, index) => (

                  <Grid item md={3}>
                    <Card  key={movs.id}>
                    <CardMedia
                        className="example"
                        component="img"
                        sx={{ height: '50%', width: '100%', display: 'flex', flexDirection: 'row' }}
                        alt="The house from the offer."
                        src={movs.movPoster}

                      />

                    </Card>
                  </Grid>
                  )))
                }
                  </Carousel>
                  
             


              

           

          </div >
        </Grid >

      }

      {/* </Grid> */}



    </div >


  );
}

export default Movielist;