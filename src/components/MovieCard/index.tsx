import { Box, Image } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import * as types from "../../types";

interface IProps {
  movie: types.IMovie;
}

const MovieCard: React.FC<IProps> = ({ movie }) => {
  return (
    <Box maxW="sm" overflow="hidden">
      <Image
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
      />
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {movie.title}
      </Box>
    </Box>
  );
};

export default observer(MovieCard);
