import { useRef } from "react";
import { Container, Control } from "./styles";

import { Button } from "../../pages/Home/styles";

export function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function handleSubmit(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <Container onSubmit={handleSubmit} >
      <Control>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </Control>
      <Control>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </Control>
      <Control>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </Control>
      <Button>Add Movie</Button>
    </Container>
  );
}
