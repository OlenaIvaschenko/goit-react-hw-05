export const changeSearchQuery = (inputQuery, searchParams) => {
  const newQuery = inputQuery;
  const nextSearchParams = new URLSearchParams(searchParams);

  if (newQuery !== "") {
    nextSearchParams.set("query", newQuery);
  } else {
    nextSearchParams.delete("query");
  }

  return nextSearchParams;
};
