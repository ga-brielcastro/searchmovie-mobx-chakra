import axios from "axios";

import * as types from "../types";

// API do TMDB
const API_KEY = "f779fc0eaab43f65ae493c08c987c27b";
const API_BASE = "https://api.themoviedb.org/3";

class API {
  private base;
  constructor() {
    this.base = axios.create({
      baseURL: API_BASE,
    });
  }
  public async getMovies(search: string): Promise<types.IMovie[]> {
    const result = await this.base.get(
      `/search/movie?api_key=${API_KEY}&query=${search}`
    );
    return result.data.results;
  }

  public async getTopMovies(): Promise<types.IMovie[]> {
    const result = await this.base.get(
      `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
    );
    return result.data.results;
  }
}

const api = new API();

export default api;
