import { Flex, Box, Spacer, Center, Text } from "@chakra-ui/react";
import { useLocalObservable, observer } from "mobx-react-lite";
import React from "react";

import { Store } from "../../store";
import SearchBox from "../SearchBox";

const Header: React.FC = ({ children }) => {
  const store = useLocalObservable(() => new Store());

  React.useEffect(() => {
    store.fetchMovies();
  }, [store, store.search]);

  return (
    <Box bg="darkslategrey" w="100%" p={3} color="white">
      <Flex>
        <Center>
          <Text fontSize="3xl">SearchMovie</Text>
        </Center>
        <Spacer />
        <Box width="500px">
          <SearchBox
            value={store.search}
            onChange={(search: string) => store.setSearch(search)}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default observer(Header);
