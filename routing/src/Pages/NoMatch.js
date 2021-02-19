import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  const { pathname } = useLocation();
  return (
    <>
      <h1>404 NOT FOUND: {pathname} is an invalid route</h1>
      <pre>{window.location.href}</pre>
    </>
  );
};

export default NoMatch;
