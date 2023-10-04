import { useState, useEffect } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardActionArea from '@mui/material/CardActionArea';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { set, useForm } from "react-hook-form";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tabs from '@mui/material/Tabs';

import {
  Tab
} from '@mui/material';
import {
  TabList,
  TabContext, TabPanel
} from '@mui/lab';


// const theme = createTheme({
//   palette: {
//     primary: red,
//     secondary: purple
//   }
// });


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
  const [value, setValue] = React.useState(0);
  const [star, setStar] = useState(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // console.log(localStorage);

  // setting an array empty to use for my movies array
  const [see, setSee] = useState(-1);


  const showButton = (i) => {

    setSee(i);
  };
  const [searchTerm, setSearchTerm] = useState('');
  // const[setEditing, setIsEditing] = useState(false);

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
    if (!r) 
    {
      setFavorites((film) => {
        const shows = {
          id: film.length === 0 ? 1 : film[film.length - 1].id + 1,
          movPoster: poster,
        }
        alert("movie added to favorites!")
        
        console.log(shows.movPoster);
        // setStar(movPoster);

        const returnValue = [...film, shows];

        

        return returnValue;
        

      });
    }
    else {
      alert("Movie already exists on your favorites!")
    }

  }

  return (
    // <ThemeProvider theme={theme}>

    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }} padding={2} >
        <Grid container spacing={2} >

          <Grid item xs={12}>

            {/* <Item> */}
            {/* <div className='container-fluid movie-app'>
              <div className='search'> */}

            <Typography variant="h2" color="common.white"
              align="center"

              id="sign"


            >MOVIE LIST

            </Typography>


            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            // sx={{ minHeight: '100vh' }}
            >
              <Grid item xs={3}>
                <form onSubmit={handleSubmit(onSubmit)} >

                  <TextField id="outlined-basic"
                    type="text"
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
                    }} />


                  <Button className="add-button" color="error" variant="contained" type="submit" sx={{ ml: 2, mt: 3, p: 2, }} onSubmit={(e) => names(searchTerm)}>
                    Send
                  </Button>{ }

                </form>
              </Grid>
            </Grid>
            {/* </Item> */}

            {/* <div id="people">
          {person}
        </div>
        <button onClick={() => { setPerson("Bob") }}>Click</button> */}


            {/* Calling my function that runs the api call and sets it to what the user searches on button click            */}
            {/* </div> */}


            {name.length === 0 ? (<h1>no movies loaded</h1>) :

              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Search Results" value="1" />
                    <Tab label="Favorites" value="2" />

                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Grid item xs={12}>
                    <h1 style={{ textAlign: "center" }}>Movies</h1>
                    <Grid container direction="row">
                      {/* <div className="carousel">
                    <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false} sx={{ maxHeight: 650, width: '50%' }}> */}
                      {
                        (name.map((movie, index) => (

                          <Grid item className="card" key={movie.id} xs={3}  >
                            <Card
                              sx={{ minWidth: 200, maxWidth: 220 }}
                              style={{ display: "flex" }}

                            >
                              
                              <CardActionArea onClick={() => {saveMovie(movie.Poster, setStar(movie.Poster))}}> 
                                
                              
                                <CardMedia
                                  className="example"
                                  component="img"
                                  sx={{ maxHeight: 200, width: '100%', display: 'flex', flexDirection: 'row' }}
                                  alt="The house from the offer."
                                  src={movie.Poster}
                                />
                               {movie.Poster === star ?   <FavoriteIcon color="error"/> : (<p>No Favorite</p>)}

                        
                              </CardActionArea>
                            </Card>
                          </Grid>

                        )))
                      }

                      {/* </Grid> */}
                    </Grid>
                    </Grid>

                    {/* <Grid xs={4}> <h1>Favorites</h1> </Grid> */}

                </TabPanel>
                <TabPanel value="2">
                  <Grid item xs={12}>
                    <h1 style={{ textAlign: "center" }}>Favorites</h1>
                    <Grid container space={1}>
                      {

                        (favorites.toReversed().map((movs, i) => (


                          <Grid item className="card" key={movs.id}>
                            {/* <Grid item xs={2}> */}
                            <Card
                              sx={{ minWidth: 200, maxWidth: 200 }}
                              style={{ display: "flex" }}
                            >

                              <div
                                onMouseEnter={() => showButton(i)}
                                onMouseLeave={hideButton}>

                                {/* <Card> */}
                                <CardMedia

                                  style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    // width: "50%",
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
                            {/* </Grid> */}
                          </Grid>



                        )))
                        // </div>
                      }
                    </Grid>
                  </Grid>
                </TabPanel>
              </TabContext>
            }


          </Grid>
        
        </Grid>
      </Box>
    </Container>
    // </ThemeProvider>

  );
}

export default Movielist;