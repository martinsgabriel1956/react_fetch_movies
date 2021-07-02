import React from 'react';

import { Container } from './styles';

export function Movie(props) {
  return (
    <Container>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </Container>
  );
};

