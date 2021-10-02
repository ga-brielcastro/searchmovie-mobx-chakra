import * as types from '../../types';
import { observer } from 'mobx-react-lite'
import { Container, Poster, Title } from './styles';

interface MovieCardProps {
  movie: types.Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Container>
      <Poster src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
      <Title>{movie.title}</Title>
    </Container>
  );
}

export default observer(MovieCard);