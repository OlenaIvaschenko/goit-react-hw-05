import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const id = useParams().movieId;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
          {
            headers: {
              // Замість api_read_access_token вставте свій токен
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGFlZjg0MjI3MGY0OWZhZmIzNDc2MTUzMTYzNDIzOSIsIm5iZiI6MS43NDczNDA4NDk3MTI5OTk4ZSs5LCJzdWIiOiI2ODI2NGUzMWNlNTY1MzkwNWIzMTU5ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bSOioVlYdYjIzCUIyX9z-0Vb3nDeWgd7Y8-Eidu69S8",
            },
          }
        );
        // console.log(response.data.results);

        setReviews(response.data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchReview();
  }, [id]);

  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} style={{ marginBottom: "2rem" }}>
              <h3>Author: {review.author_details.username}</h3>
              {review.author_details.rating && (
                <p>Rating: {review.author_details.rating}/10</p>
              )}
              <p>{review.content}</p>
              <p>Created at: {review.created_at.split("T")[0]}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MovieReviews;
