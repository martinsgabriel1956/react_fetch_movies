import { Section, Button } from './styles';

import { MoviesList } from '../../components/MoviesList';

export function Home() {
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  return (
    <>
    <Section>
      <Button>Fetch Movies</Button>
    </Section>
    <Section>
      <MoviesList movies={dummyMovies} />
    </Section>
  </>
  );
}