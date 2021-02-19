import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import {
  Route,
  useRouteMatch,
  useParams,
  Link,
  useHistory,
} from "react-router-dom";
import datas from "./data.json";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Note from "./Note";
const LinkStyled = styled(Link)`
  color: black;
`;

const Page = () => {
  const { name } = useParams();
  const { goBack } = useHistory();
  const page = datas.find(data =>
    new RegExp(`${name.split`-`.join` `}`, "gi").test(data.name)
  );
  return (
    <>
      <h1>Programatically created page for {name}</h1>
      <p>{page.name}</p>
      <p>{page.status ? "ACTIVE" : "PASUED"}</p>
      <Button onClick={() => goBack()}>go back</Button>
    </>
  );
};

const About = () => {
  const match = useRouteMatch();
  const [anchor, setAnchor] = useState(null);
  const handleClose = () => setAnchor(null);
  const handleClick = e => setAnchor(e.currentTarget);
  return (
    <>
      <Container fixed>
        <h1>About Page</h1>
        <Note />
        <Button onClick={handleClick}>Open Menu</Button>
        <Menu
          anchorEl={anchor}
          keepMounted
          open={!!anchor}
          onClose={handleClose}
        >
          {datas.map(data => (
            <MenuItem key={data.id}>
              <LinkStyled to={`${match.path}/${data.name.split` `.join`-`}`}>
                {data.name.split` `.join(" ")}
              </LinkStyled>
            </MenuItem>
          ))}
        </Menu>
      </Container>
      <Route path={`${match.path}/:name`}>
        <Page />
      </Route>
    </>
  );
};

export default About;
