import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage= ()=>{

    const a=useParams();
    console.log(a);
    
    

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
    //   setFilms(films.data.results);
    }
     catch (error) {
        console.error("Error fetching films:", error);
      } 
    }

    fetchFilms();
  
  },[id]);




    return <p> Movie details page</p>
};
export default MovieDetailsPage;