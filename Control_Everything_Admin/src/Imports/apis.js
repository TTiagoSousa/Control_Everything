import { BASE_URL } from "../config/urls";

export const getCoutries = () =>
  `${BASE_URL}/countries/get-all-countries`;

export const getCurrencies = () =>
  `${BASE_URL}/currency/get-all-currencies`;  
