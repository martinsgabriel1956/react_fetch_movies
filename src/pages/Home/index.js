import { useState } from "react";

import { Section, Button } from "./styles";

import { MoviesList } from "../../components/MoviesList";

export function Home() {
  const [movies, setMovies] = useState([]);

  async function handleFetchMovies() {
    const res = await fetch(`https://swapi.dev/api/films`);
    const data = await res.json();

    const transformedMovies = data.results.map((movieData) => {
      const { episode_id, title, opening_crawl, release_date } = movieData;

      return {
        id: episode_id,
        title,
        openingText: opening_crawl,
        releaseDate: release_date,
      };
    });
    setMovies(transformedMovies);
  }
  
  return (
    <>
      <Section>
        <Button onClick={handleFetchMovies}>Fetch Movies</Button>
      </Section>
      <Section>
        <MoviesList movies={movies} />
      </Section>
    </>
  );
}
