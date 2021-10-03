import { observer } from "mobx-react-lite";

import * as types from "../../types";

interface IMovieCardProps {
  movie: types.IMovie;
}

const MovieCard: React.FC<IMovieCardProps> = () => {
  return (
    <div>
      {/* <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
      />
      <p>{movie.title}</p> */}
      <p>Title Movie</p>
    </div>
  );
};

export default observer(MovieCard);
