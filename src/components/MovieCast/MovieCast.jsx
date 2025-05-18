import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const id = useParams().movieId;

  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const cast = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
          {
            headers: {
              // Замість api_read_access_token вставте свій токен
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGFlZjg0MjI3MGY0OWZhZmIzNDc2MTUzMTYzNDIzOSIsIm5iZiI6MS43NDczNDA4NDk3MTI5OTk4ZSs5LCJzdWIiOiI2ODI2NGUzMWNlNTY1MzkwNWIzMTU5ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bSOioVlYdYjIzCUIyX9z-0Vb3nDeWgd7Y8-Eidu69S8",
            },
          }
        );

        setCast(cast.data.cast);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchCast();
  }, [id]);

  return (
    <ul className={css.cast}>
      {cast.map((actor) => (
        <li key={actor.cast_id}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={actor.name}
              width="100"
            />
          )}
          <p>
            <strong>{actor.name}</strong>
          </p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieCast;
