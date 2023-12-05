import './App.css';
import Starwars from './components/Starwars.js'
import Movielist from './components/Movielist.js'
import Favorites from './components/Favorites.js'


function App() {
  return (
    <div className="App">
      <Movielist />
      <Favorites />
      {/* <Movielist /> */}
    </div>
  );
}

export default App;
