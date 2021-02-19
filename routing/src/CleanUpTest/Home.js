import React from "react";
import useFetch from "./useFetch";

const Home = () => {
  const [{ title, body }, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  ) || [{ title: "Fake Title", body: "Fake Body" }, null, null];
  if (loading) {
    return <h1>Page is Loading...</h1>;
  }
  if (error) {
    return <h1>An Error occured: {error}</h1>;
  }
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
};

export default Home;
