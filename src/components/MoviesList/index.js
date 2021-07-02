import React from 'react';

import { Movie } from '../Movie';

import { Container } from './styles';

export function MoviesList(props) {
  return (
    <Container>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </Container>
  );
};

