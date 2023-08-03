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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Movielist() {
    const [name, setName] = useState([]);

    // setting an array empty to use for my movies array

    const [searchTerm, setSearchTerm] = useState('');
//    const [saveMovie, setSaveMovie] = useState('');

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
            id: prevMovies.length === 0 ? 1 : prevMovies[prevMovies.length -1].id + 1

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
          <Grid container spacing={4}>
          {name.length === 0 ? (<h1>no movies loaded</h1>) : 
            (name.map((movie, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                       
                      pt: '100%',
                    }}
                    image={movie.Poster}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.Title}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Save</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))
            )}            
          </Grid>
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