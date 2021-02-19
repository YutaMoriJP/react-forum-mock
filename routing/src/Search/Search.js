import React, { useRef, useEffect, useCallback } from "react";
import useInput from "../util/useInput";
import { Input, SearchContainer } from "./Search.style";
import Button from "../util/Button";
import SearchResult from "./SearchResult";
import { Route, useRouteMatch, useHistory } from "react-router-dom";

const Search = () => {
  const [search, resetSearch] = useInput("");
  const inputEl = useRef();
  const { path } = useRouteMatch();
  const history = useHistory();

  //event handlers
  const handleClick = useCallback(() => {
    history.push(`${path}/${search.value}`);
  }, [history, search.value, path]);
  const handleEnter = event => {
    if (event.key === "Enter") {
      handleClick();
    }
    return;
  };
  useEffect(() => inputEl.current.focus(), []);
  return (
    <>
      <SearchContainer>
        <Input
          type="text"
          {...search}
          ref={inputEl}
          onKeyPress={handleEnter}
          placeholder="Search for your favorite anime"
        />
        <Button onClick={handleClick}>Search Anime</Button>
      </SearchContainer>

      <Route path={`${path}/:name`}>
        <SearchResult inputEl={inputEl} resetSearch={resetSearch} />
      </Route>
    </>
  );
};

export default Search;
