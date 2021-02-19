import React from "react";
import { useLocation, Link, useRouteMatch, useHistory } from "react-router-dom";
import queryString from "query-string";
import useInput from "../util/useInput";
import Button from "../util/Button";

const useQuery = () => new URLSearchParams(useLocation().search);

const useQueryy = () => queryString.parse(useLocation().search);

const User = () => {
  const location = useLocation();
  const history = useHistory();
  const { name, age } = useQueryy();
  const [nameInput] = useInput("");
  const [ageInput] = useInput("");
  const match = useRouteMatch();
  const searchParams = useQuery();
  const myName = searchParams.get("name");
  const myAge = searchParams.get("age");
  return (
    <>
      <h1>User Profile</h1>
      <input {...nameInput} placeholder="name" />
      <input {...ageInput} placeholder="age" />
      {nameInput.value && ageInput.value && (
        <Button
          onClick={() =>
            history.push(
              `${match.path}?name=${nameInput.value}&age=${ageInput.value}`
            )
          }
        >
          Go to Queried Page
        </Button>
      )}
      {name && <p>Name: {name}</p>}
      {age && <p>Age: {age}</p>}
      {myName}
      {myAge}
    </>
  );
};

export default User;
/*
 <Link
          to={`${match.path}?name=${nameInput.value}&age=${ageInput.value}`}
        >
          Show Profile
        </Link>
        */
const obj = { x: 1 };
const deeperObj = { a: { b: { c: obj } } };
