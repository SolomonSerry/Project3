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
  const [popup, setPopup] = useState(false)

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
      
    })
  }, [page])

  return (
    <div>
     
      <Header />
      
      <Buttons 
        setPage={setPage} 
        page={page} 
        />
  
      <main>
        <div className='movieContainer wrapper'> 
          <Main 
            movie={movie}
            setPopup={setPopup}
          />
        </div>
      </main>

      <Popups 
      trigger={popup} 
      setTrigger={setPopup}
      movie={movie}
      > 
      </Popups>

      <Footer />
    </div>
  );
}

export default App;
