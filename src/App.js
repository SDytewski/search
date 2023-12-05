import './App.css';
import Starwars from './components/Starwars.js'
import Movielist from './components/Movielist.js'
import Favorites from './components/Favorites.js'


function App() {
  const slideFavoriteLeft = () => {
    var slider = document.getElementById('sliderFav')
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideFavoriteRight = () => {
    var slider = document.getElementById('sliderFav')
    slider.scrollLeft = slider.scrollLeft +
      500;
  }
  return (
    <div className="App">
      <Movielist sliderFavoriteLeft={slideFavoriteLeft} />
      <Favorites sliderFavoriteLeft={slideFavoriteLeft} />
      {/* <Movielist /> */}
    </div>
  );
  
}

export default App;
