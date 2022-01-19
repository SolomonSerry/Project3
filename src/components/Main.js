

const Main = ({movie}) => {
    return(
       movie.map( (individualMovies) => {
           return(
              
               <div key={individualMovies.id}>
                   <img onClick={() => console.log(individualMovies)} src={`https://image.tmdb.org/t/p/w200${individualMovies.poster_path}`} alt={`Original poster of ${individualMovies.title}`} />
                   <h2>{individualMovies.title}</h2>

                  
               </div>

           )
       })

    )
  

 
};

export default Main;