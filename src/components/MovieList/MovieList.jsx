import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ films }) => {
  const location = useLocation();
  // console.log(location);

  // console.log(films);

  return (
    <ul className={css.filmsList}>
      {films &&
        films.length > 0 &&
        films.map((film) => {
          return (
            <li key={film.id}>
              <Link
                className={css.link}
                to={`/movies/${film.id}`}
                state={location}
              >
                {film.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
