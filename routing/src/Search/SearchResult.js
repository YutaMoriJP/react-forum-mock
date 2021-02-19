import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import animeLists from "../data/anime.json";
import styled from "styled-components";
import Button from "../util/Button";

const Status = styled.p`
  color: ${({ status }) => (status ? "green" : "grey")};
  font-weight: 600;
`;

const SearchResult = ({ inputEl, resetSearch }) => {
  console.log(inputEl);
  const { name } = useParams();
  const { goBack, goForward } = useHistory();
  const { name: animeName, description, status } = animeLists.find(
    ({ name: animeName }) => {
      return new RegExp(`${name}`, "gi").test(animeName);
    }
  ) || { name: "", description: "", status: "" };
  useEffect(() => {
    inputEl.current.focus();
    resetSearch();
  }, [name]);
  console.log(useHistory());

  if (!animeName.length) {
    return <h1>No Results...</h1>;
  }
  return (
    <>
      <h1>{animeName}</h1>
      <p>{description}</p>
      <Status status={status === "active"}>{status}</Status>
      <Button onClick={() => goBack()}>Previous Search</Button>
      <Button onClick={() => goForward()}>Forward</Button>
    </>
  );
};

export default SearchResult;
