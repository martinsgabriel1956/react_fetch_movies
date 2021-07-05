import { useCallback, useEffect, useState } from "react";

import toast, { Toaster } from 'react-hot-toast';

import { Section, Button, SpinLoader } from "./styles";

import { MoviesList } from "../../components/MoviesList";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false); 
  
  const handleFetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(true);
      const res = await fetch(`https://swapi.dev/api/films`);
      
      if(!res.ok) throw new Error('Something went wrong');
      
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
    } catch(e) {
      setError(toast.error(`${e.message}`));
    }
    setIsLoading(false);
  }, [])

  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies])

  return (
    <>
      <Section>
        <Button onClick={handleFetchMovies}>Fetch Movies</Button>
      </Section>
      <Section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no Movies</p>}
        {!isLoading && error && <Toaster />}
        {isLoading && <SpinLoader type="spin" />}
      </Section>
    </>
  );
}
