import css from "./MovieList.module.css"
import { Link } from "react-router-dom";

const MovieList = ({films}) => {


  return <ul>
    {films.map((film)=>{
        return (
            <li key ={film.id}>
              <Link className={css.link} to={`/movies/${film.id}`}>
              {film.title}
              </Link>
              </li>
            
        )
    })}
  </ul>;
};

export default MovieList;

