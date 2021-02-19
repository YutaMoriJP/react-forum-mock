import React from "react";
import {
  useLocation,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import queryString from "query-string";

const users = [
  { id: 0, username: "YM" },
  { id: 1, username: "MYY" },
  { id: 2, username: "XMM" },
  { id: 3, username: "HHH" },
  { id: 4, username: "OOOO" },
];

const useQuery = search => queryString.parse(search);

const User = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const { search, pathname } = useLocation();
  const { name, id: queryId } = useQuery(search);
  const { username, id: userid } = users.find(user => user.id === +id) || {
    username: "invalid",
    id: 0,
  };
  console.log("nested path is", pathname);
  console.log("nested path is", path);
  return (
    <>
      <h1>User Page: {username}</h1>
      <Link to={`${pathname}?name=${username}&id=${userid}`}>
        Go to queried page
      </Link>
      <pre>{name}</pre>
      <pre>{queryId}</pre>
    </>
  );
};

const UserAccount = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  console.log("path is", path);
  console.log("path is", pathname);
  return (
    <>
      <h1>User Account</h1>
      <ul>
        {users.map(({ id }) => (
          <li key={id}>
            <Link to={`${path}/${id}`}>{id}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:id`}>
        <User />
      </Route>
    </>
  );
};

export default UserAccount;
