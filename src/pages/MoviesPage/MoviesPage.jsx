import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { changeSearchQuery } from "../../utils";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchFilms, setSearchFilms] = useState([]);
  
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("query"));
  // const query = searchParams.get("query") ?? "";

  

  useEffect(() => {
    async function fetchFilms() {
      try {
        const films = await axios.get(
          `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
          {
            headers: {
              // Замість api_read_access_token вставте свій токен
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGFlZjg0MjI3MGY0OWZhZmIzNDc2MTUzMTYzNDIzOSIsIm5iZiI6MS43NDczNDA4NDk3MTI5OTk4ZSs5LCJzdWIiOiI2ODI2NGUzMWNlNTY1MzkwNWIzMTU5ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bSOioVlYdYjIzCUIyX9z-0Vb3nDeWgd7Y8-Eidu69S8",
            },
          }
        );
        console.log(films.data.results);
        setSearchFilms(films.data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    }

    fetchFilms();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const inputQuery = form.elements.inputForm.value;
    

    // setSearchParams({ query: inputQuery });

    // const newQuery = inputQuery;
    // const nextSearchParams = new URLSearchParams(searchParams);

    // if (newQuery !== "") {
    //   nextSearchParams.set("query", newQuery);
    // } else {
    //   nextSearchParams.delete("query");
    // }

    // setSearchParams(nextSearchParams);

    setSearchParams(changeSearchQuery(inputQuery,searchParams));




    console.log(inputQuery);
    // if (inputQuery) {
    //   setQuery(inputQuery);
    //   form.reset();
    // }

    setQuery(inputQuery);
    form.reset();
  };
  return (
    <>
      <form className={css.searchBarForm} onSubmit={handleSubmit}>
        <input
          className={css.filterInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="inputForm"
        />
        <button className={css.btnSubmit} type="submit">
          Search
        </button>
      </form>
      <MovieList films={searchFilms} />
    </>
  );
};
export default MoviesPage;
