// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../components/App.css";
// import SearchBar from "./SearchBar/SearchBar";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Navigation from "./Navigation/Navigation";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";




const App = () => {
  

  

  return (
    <div>
      {/* <SearchBar onSubmit={onSubmit} /> */}
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />} /> */}
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
           <Route path="cast" element={<MovieCast />} />
           <Route path="reviews" element={<MovieReviews />} />
       </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
