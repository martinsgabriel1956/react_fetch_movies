import styled from "styled-components";
import ReactLoading from "react-loading";

export const Section = styled.section`
  margin: 1rem auto;
  width: 90%;
  max-width: 40rem;
  text-align: center;
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
`;

export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background: #230052;
  border: 1px solid #230052;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 20px;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background-color: #460897;
    border-color: #460897;
  }
`;

export const SpinLoader = styled(ReactLoading)`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #460897;
  height: 10%;
  width: 10%;
`;
