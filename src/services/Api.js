import React from "react";
import axios from 'axios';
import { getToken } from "./Auth";

const api = axios.create({
  baseURL: "https://cyan-challenge-server.herokuapp.com/"
  // Uncomment below and comment above if the api is running locally
  // baseURL: "http://localhost:8080"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
