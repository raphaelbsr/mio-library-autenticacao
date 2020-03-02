import axios from "axios";

import { getToken } from "./auth";

/**
 * process.env.REACT_APP_MIO_AUTH_API_URL
 * Url para o endpoint do serviço mio-auth
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_MIO_AUTH_API_URL
});

api.interceptors.request.use(async config => {
  const conf = config;
  const token = getToken();
  if (token) {
    conf.headers.Authorization = `Bearer ${token}`;
  }
  conf.headers["Content-Type"] = "application/json;charset=UTF-8";
  conf.headers["Access-Control-Allow-Origin"] = "*";
  conf.headers["Access-Control-Allow-Headers"] =
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept";
  conf.headers["Access-Control-Allow-Methods"] =
    "GET, POST, OPTIONS, PUT, PATCH, DELETE";
  conf.headers["Access-Control-Allow-Credentials"] = true;
  return conf;
});

export default api;
