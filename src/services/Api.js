import React, {Component} from "react";
import axios from 'axios';
import { getToken } from "./Auth";

const api = axios.create({
  baseURL: "https://cyan-challenge-server.herokuapp.com/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;