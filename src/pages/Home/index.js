import { useCallback, useEffect, useState } from "react";

import toast, { Toaster } from 'react-hot-toast';

import { AddMovie } from '../../components/AddMovie';

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
      const res = await fetch(`https://react-fetch-movies-2bc13-default-rtdb.firebaseio.com/movies.json`);
      
      if(!res.ok) throw new Error('Something went wrong');
      
      const data = await res.json();
      console.log(data)

      const loadedMovies = [];
 
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseData: data[key].releaseData,

        })
      }

      setMovies(loadedMovies);
    } catch(e) {
      setError(toast.error(`${e.message}`));
    }
    setIsLoading(false);
  }, [])

  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies])

  async function handleAddMovie(movie) {
    const url = `https://react-fetch-movies-2bc13-default-rtdb.firebaseio.com/movies.json`;
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      <Section>
        <AddMovie onAddMovie={handleAddMovie} />
      </Section>
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
