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
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Movielist() {
  const [name, setName] = useState([]);
  const [person, setPerson] = useState("John")

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
    formState:{ errors },
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
        console.log(shows.movPoster);

        const returnValue = [...film, shows];

        return returnValue;

      });
    }
    else {
      alert("Movie already exists on your favorites!")
    }

  }

  return (
    <div className='container-fluid movie-app'>
      <div className='search'>
        {/* <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}

        {/* setting the value to my search and on change calling the method to update the value to what the user types       */}
        {/* <button

          alt='search'
          onClick={() => { names(searchTerm); }}
          style={{ textAlign: "center" }}
        >
          Search
        </button> */}

         <form onSubmit={handleSubmit(onSubmit)}>

 <TextField id="outlined-basic"
                  type="text"
                  name="movie"
                  value={searchTerm}
                
                  placeholder="Search for a Movie"
                  {...register ("email", {
                    required: "Please enter at least one character",
                    minLength: 1
                  
                  })}
                  error={!!errors?.email}
                  
                  helperText={errors?.email ? errors.email.message : null}
                  sx={{ ml: 1, mt: 1, p: 2, }}
                  onChange={(e) => {
                   setSearchTerm(e.target.value);
                  }} />


               <Button className="add-button" variant="contained" type="submit" sx={{ ml: 2, mt: 3, p: 2, }}onSubmit={(e)=> names(searchTerm)}>
                  Send
                </Button>

        </form>

        {/* <div id="people">
          {person}
        </div>
        <button onClick={() => { setPerson("Bob") }}>Click</button> */}


        {/* Calling my function that runs the api call and sets it to what the user searches on button click            */}
      </div>


      {name.length === 0 ? (<h1>no movies loaded</h1>) :

        <Grid container direction="row">

          <Grid item xs={6}>
            <h1 style={{ textAlign: "center" }}>Movies</h1>
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

          {/* <Grid xs={4}> <h1>Favorites</h1> </Grid> */}


          <Grid item xs={6}>
            <h1 style={{ textAlign: "center" }}>Favorites</h1>
            {

              (favorites.toReversed().map((movs, i) => (


                <span className="card" key={movs.id}>
                  <Card
                    sx={{ minWidth: 200 }}
                    style={{ position: "relative", width: "100%" }}
                  >

<div
                      onMouseEnter={() => showButton(i)}
                      onMouseLeave={hideButton}>

                    {/* <Card> */}
                    <CardMedia

                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "50%",
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



                 
                      <Button

                        style={{ maxWidth: '130px', display: see === i ? 'block' : 'none' }} onClick={() => { deleteMovie(movs.movPoster, favorites) }}>
                        Delete HERE</Button>
                  
                </div>
                </Card>
                </span>



          )))
            }

        </Grid>

        </Grid>











      }

{/* </Grid> */ }



    </div >


  );
}

export default Movielist;