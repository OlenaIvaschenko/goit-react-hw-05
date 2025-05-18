import axios from "axios";
import { useEffect, useRef, useState, Suspense } from "react";
import {
  Outlet,
  useParams,
  NavLink,
  useLocation,
  Link,
} from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const location = useLocation();
  // console.log(location);

  const backLinkRef = useRef(location.state ?? "/movies");

  const [film, setFilm] = useState(null);

  const id = useParams().movieId;

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    async function fetchFilms() {
      try {
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
        // console.log(film.data);
        setFilm(film.data);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    }

    fetchFilms();
  }, [id]);

  return (
    <div className={css.details}>
      <Link className={css.goBackLink} to={backLinkRef.current}>
        Go back
      </Link>
      {film && (
        <div className={css.pictureFilm}>
          <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                : defaultImg
            }
            width={250}
            alt={film.tagline}
          />

          <div className={css.infoDiv}>
            <h2>{film.original_title}</h2>
            <p>User score {film.popularity}</p>
            <h3>Overview</h3>
            <p className={css.aboutFilm}>{film.overview}</p>
            <h3>Genres</h3>
            <p>{film.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
      )}

      <div className={css.navInfo}>
        <p className={css.aboutFilm}>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>

        <Suspense fallback={<strong>Loading subcomponent...</strong>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MovieDetailsPage;
