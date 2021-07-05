import styled from "styled-components";

export const Container = styled.form``;

export const Control = styled.div`
  margin: 1rem 0;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.2rem;
    border-radius: 12px;
    border: 1px solid #ccc;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #230052;
  }
`;
