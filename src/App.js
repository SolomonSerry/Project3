// App.js

// My original idea for this app was to have our movie sort out my genre but after the approval of my scope I quickly realize that the endpoint for genre didnt give you back the movie for each genre type but just the genre.  so i decided to use the end point the gives you movie based off of popularity.  There are several pages of movie we can search through as well as click all individual movies and have a popup with additional info.

// Sorry for the confusion.

import { useEffect, useState } from 'react';
import axios from 'axios';
import Main from './components/Main.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Buttons from './components/Buttons.js';
import Popups from "./components/Popups.js";
import './App.css';

function App() {
  const apiKey = 'ffa3e4a7e25c87e4ff68807699b7cc3d'

  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [popup, setPopup] = useState(false);
  const [movieInfo, setMovieInfo] = useState([]);
  const [error, setError] = useState(null)

  useEffect( () => {
    if(page < 1){
      setPage(20)
    } else if (page > 20){
      setPage(1)
    }
  }, [page])


  useEffect( () => {
    axios({
      url: 'https://api.themoviedb.org/3/movie/popular?',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: page
      }
    }).then((response) => {
        setMovie(response.data.results)
        setError(null)
      
    }).catch((error) => {
      setError(error.message)
    })
  }, [page])
  
  return (
    <div>
    
      <Header />
      
  
      <main>
        <Buttons 
          setPage={setPage} 
          page={page} 
          />
        <div className='movieContainer wrapper'> 
        {error && <div>{error}</div>}
          <Main 
            movie={movie}
            setPopup={setPopup}
            setMovieInfo={setMovieInfo}
          />
        </div>
      </main>

      <Popups 
      trigger={popup} 
      setTrigger={setPopup}
      movie={movie}
      movieInfo={movieInfo}
      > 
      </Popups>

      <Footer />
    </div>
  );
}

export default App;
