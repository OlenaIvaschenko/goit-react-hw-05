import css from "./SearchForm.module.css";

const SearchForm = ({ handleSubmit }) => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        name="inputForm"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
