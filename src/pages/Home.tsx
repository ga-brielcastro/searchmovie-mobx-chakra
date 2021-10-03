import { Heading, Grid, Box, Text, Center } from "@chakra-ui/react";
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

      <Box p="20">
        <Heading color="darkslategrey" mb="5" as="h3" size="lg">
          Suas pesquisas anteriores
        </Heading>
        {store.searchList.map((n) => (
          <Text pr="10px" as="ins" color="tomato" fontSize="20px">
            {n}
          </Text>
        ))}

        <Heading color="darkslategrey" mt="10" mb="10" as="h3" size="lg">
          Lista dos TOP Filmes
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {store.topMoviesSearched.map((movie: types.IMovie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>

        <Heading color="darkslategrey" mt="10" mb="10" as="h3" size="lg">
          Todos resultados
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {store.loading ? (
            <img src={loading} alt="" />
          ) : (
            store.movies.map((movie: types.IMovie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}
        </Grid>
      </Box>
    </>
  );
};

export default observer(Home);
