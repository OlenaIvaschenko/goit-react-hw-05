import axios from "axios";

const API_KEY ="InGeT8sv3qlRITkAYoElpmTtjoJD2N0uvQC1IBvKn4I";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (query, page, per_page = 12) => {
  const response = await axios.get(
    `search/photos?client_id=${API_KEY}&query=${query}&page=${page}&per_page=${per_page}`
  );

//   console.log(response);
  
  return response.data;
};
