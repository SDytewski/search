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
    // console.log(favorites);
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
  //  console.log(favorites);
    
    setFavorites((film) => {
      const shows = {
        id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
        movPoster: yolo,
      }

      const userObject = favorites;
      // console.log(userObject);


  
      for(var i = 0; i < userObject.length; i++) {
        if (userObject[i].movPoster === yolo) {
          alert("hi");
          
        }
      }
      return [...film, shows]
      
     
      // if (yolo === film.movePoster) {
      //   alert("hello!")
      // } 
    });
    
    // setFavorites(current => [...current, film]);
    

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

          <Grid item xs={6}>
            <h1>Movies</h1>
            <div className="carousel">
              <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false} sx={{ maxHeight: 650, width: '50%' }}>
                {
                  (name.map((movie, index) => (
                    

                   <Card key={movie.id}  >
                      <CardActionArea onClick={() => saveMovie(movie.Poster)}>
                        <CardMedia
                          className="example"
                          component="img"
                          sx={{ maxHeight: 450, width: '100%', display: 'flex', flexDirection: 'row' }}
                          alt="The house from the offer."
                          src={movie.Poster}
                        />

                        {/* <Button size="large">Save</Button> */}

                      </CardActionArea>
                    </Card>

                  )))
                }
              </Carousel>
            </div>

          </Grid>
          <Grid item xs={6}>
            <h1>Favorites</h1>
            <div className="carousel">

              <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false} sx={{ maxHeight: 650, width: '50%' }}>
                {
                  
                  (favorites.toReversed().map((movs, index) => (
                  
                    
                    <Card key={movs.id}>
                      <CardMedia
                        className="example"
                        component="img"
                        sx={{ maxHeight: 450, width: '100%', display: 'flex', flexDirection: 'row' }}
                        alt="The house from the offer."
                        src={movs.movPoster}

                      />

                    </Card>

                  )))
                }
              </Carousel>
            </div>

          </Grid>









        </Grid >

      }

      {/* </Grid> */}



    </div >


  );
}

export default Movielist;