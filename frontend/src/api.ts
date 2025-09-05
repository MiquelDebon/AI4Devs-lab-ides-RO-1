import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000" // debe coincidir con el puerto del backend
});
