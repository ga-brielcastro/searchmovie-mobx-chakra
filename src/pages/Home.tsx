import { Heading } from "@chakra-ui/react";
import { useLocalObservable, observer } from "mobx-react-lite";
import React from "react";

import loading from "../assets/loading.svg";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { Store } from "../store";
import * as types from "../types";

const Home: React.FC = () => {
  const store = useLocalObservable(() => new Store());

  React.useEffect(() => {
    store.fetchMovies();
  }, [store, store.search]);

  return (
    <>
      <Header
        search={store.search}
        changeValue={(txt: string) => store.setSearch(txt)}
      />

      <Heading as="h3" size="lg">
        Suas pesquisas anteriores
      </Heading>
      {store.searchList.map((n) => (
        <span>{n}</span>
      ))}

      <Heading as="h3" size="lg">
        Lista dos TOP Filmes
      </Heading>
      {store.topMoviesSearched.map((movie: types.IMovie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

      <Heading as="h3" size="lg">
        Todos resultados
      </Heading>
      {store.loading ? (
        <img src={loading} alt="" />
      ) : (
        store.movies.map((movie: types.IMovie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </>
  );
};

export default observer(Home);
