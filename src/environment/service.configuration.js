import axios from "axios";

export const apiservice = axios.create({
  baseURL: "https://www.random.org/integers/",
});
