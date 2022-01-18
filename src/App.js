import { useEffect, useState } from 'react';
import axios from 'axios';
import Main from './Main.js';
import Header from './Header.js';
import './App.css';

function App() {
  const apiKey = 'ffa3e4a7e25c87e4ff68807699b7cc3d'

  const [movie, setMovie] = useState([]);

  useEffect( () => {
    axios({
      url: 'https://api.themoviedb.org/3/movie/popular?',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1
      }
    }).then((response) => {
      setMovie(response.data.results)
    })
  }, [])

  return (
    <div>
      <Header />

      <Main 
      movieInfo={movie}
      setMovieInfo={setMovie}
      />


    
    </div>
  );
}

export default App;
