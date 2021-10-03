import { Flex, Box, Spacer, Center, Text } from "@chakra-ui/react";
import React from "react";

import SearchBox from "../SearchBox";

interface IProps {
  search: string;
  changeValue: (event: string) => void;
}

const Header: React.FC<IProps> = ({ search, changeValue }) => {
  return (
    <Box bg="darkslategrey" w="100%" p={3} color="white">
      <Flex>
        <Center>
          <Text fontSize="3xl">SearchMovie</Text>
        </Center>
        <Spacer />
        <Box width="500px">
          <SearchBox value={search} onChange={changeValue} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
