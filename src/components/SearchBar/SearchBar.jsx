import css from "./SearchBar.module.css";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Can not be empty");

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.inputForm.value;
    // console.log(query);

    if (!query.trim()) {
      notify();
    } else {
      onSubmit(query);
      form.reset();
    }
  };

  return (
    <header className={css.header}>
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
      <Toaster />
    </header>
  );
};

export default SearchBar;
