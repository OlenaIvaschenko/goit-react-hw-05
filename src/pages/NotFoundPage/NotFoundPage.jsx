import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.homeLink}>
      <Link to="/">Go Home page</Link>
      <p> Not found page</p>
    </div>
  );
};
export default NotFoundPage;
