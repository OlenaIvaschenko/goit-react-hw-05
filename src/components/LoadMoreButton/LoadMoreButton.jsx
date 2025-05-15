import css from "./LoadMoreButton.module.css"


const LoadMoreBtn = ({ onClick }) => {
  return <button className={css.btn} onClick={onClick}>Load more</button>;
};
export default LoadMoreBtn;
