import styled from "styled-components";

export const SearchContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  button {
    margin: 0;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  font-size: 1.5rem;
  flex: 1 1 auto;
  background-color: #f1f3f5;
  :focus {
    background-color: white;
  }
  ::placeholder {
    font-size: 1rem;
  }
`;
