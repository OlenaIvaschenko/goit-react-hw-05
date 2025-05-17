import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import css from "./MovieDetailsPage.module.css"


const MovieDetailsPage= ()=>{

  const [film, setFilm] = useState(null);



    // const {movieID}=useParams();
    // console.log(movieID);
  

    const id = useParams().movieId
    console.log(id);
    

useEffect(() => {
    async function fetchFilms() {
      try{
      const film = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          headers: {
            // Замість api_read_access_token вставте свій токен
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGFlZjg0MjI3MGY0OWZhZmIzNDc2MTUzMTYzNDIzOSIsIm5iZiI6MS43NDczNDA4NDk3MTI5OTk4ZSs5LCJzdWIiOiI2ODI2NGUzMWNlNTY1MzkwNWIzMTU5ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bSOioVlYdYjIzCUIyX9z-0Vb3nDeWgd7Y8-Eidu69S8",
          },
        }
      );
      console.log(film.data);
      setFilm(film.data);
    }
     catch (error) {
        console.error("Error fetching films:", error);
      } 
    }

    fetchFilms();
  
  },[id]);




    return (
    <div className={css.details}>
      <button >Go back</button>
      {film &&(
        <div className={css.pictureFilm}>
      <img src={`https://image.tmdb.org/t/p/w185${film.poster_path}`} alt={`film.tagline`} />

      <div>
      <h2>{film.original_title}</h2>
      <p>User score</p>
      <h3>Overview</h3>
      <p>{film.overview}</p>
      <h3>Genres</h3>
      <p>{film.genres.map(genre => genre.name).join(', ')}</p>
      
      

      </div>
      
      </div>)}
      
      <div className={css.navInfo}>
        <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
      </div>
    </div>
    )
};
export default MovieDetailsPage;
