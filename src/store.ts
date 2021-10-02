import { makeAutoObservable, autorun } from "mobx";

import api from "./API";
import * as types from "./types";

export class Store {
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      if (this.search) {
        this.searchList.push(this.search);
      }
    });
  }
  public movies: types.IMovie[] = [];
  public loading = false;
  public search = "";
  public searchList: Array<string> = [];

  public setSearch(search: string): void {
    this.search = search;
  }
  public setMovies(movies: types.IMovie[]): void {
    this.movies = movies;
  }

  public setLoading(loading: boolean): void {
    this.loading = loading;
  }

  public fetchMovies = async () => {
    if (this.loading) {
      return;
    }
    this.setLoading(true);

    try {
      let movies = [];

      if (this.search !== "") {
        movies = await api.getMovies(this.search);
      } else {
        movies = await api.getTopMovies();
      }

      this.setMovies(movies);
    } catch (e) {
      console.error(e);
    } finally {
      this.setLoading(false);
    }
  };

  public get topMoviesSearched(): any {
    return this.movies
      .slice()
      .sort((l, r) => l.popularity - r.popularity)
      .slice(0, 10);
  }
}
