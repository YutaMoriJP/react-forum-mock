import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import getData, { data as reqData } from "../container/mockData";
import CircularProgress from "@material-ui/core/CircularProgress";
import StyledButton from "../button/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";

const Container = styled(Grid)`
  justify-content: center;
`;

const PaperStyled = styled(Paper)`
  height: 200px;
`;

const Item = styled(Grid)`
  flex: 1 1 300px;
`;

const Loading = styled(CircularProgress)`
  color: seagreen;
`;

const CheckBox = ({ v }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      fontSize="large"
      color="primary"
      checked={checked}
      onChange={() => setChecked(prev => !prev)}
      icon={<Favorite />}
      checkedIcon={<Favorite />}
    />
  );
};

const MainGrid = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const asyncReq = async () => {
      const res = await getData(reqData);
      setData(res);
    };
    const timer = setTimeout(asyncReq, 1000);
    return () => clearTimeout(timer);
  }, []); //flex container
  return (
    <>
      <Container container spacing={2}>
        <Item item xs={12}>
          <PaperStyled variation="outlined">
            <h1>Title</h1>
            <p>Content</p>
            <pre>xs: 12</pre>
            {Array.from({ length: 2 }, (_, i) => i).map(v => {
              return <CheckBox key={v} v={v} />;
            })}
          </PaperStyled>
        </Item>
        <Item item xs={6}>
          <PaperStyled variation="outlined">
            <h1>Title</h1>
            <p>Content</p>
            <pre>xs: 6</pre>
          </PaperStyled>
        </Item>
        <Item item xs={6}>
          <PaperStyled variation="outlined">
            <h1>Title</h1>
            <p>Content</p>
            <pre>xs: 6</pre>
          </PaperStyled>
        </Item>
        <Item item lg={3} md={4} xs={10}>
          <PaperStyled variation="outlined">
            <h1>Title</h1>
            <p>Content</p>
            <pre>xs: 3</pre>
          </PaperStyled>
        </Item>
        <Item item lg={3} md={4} xs={10}>
          <PaperStyled variation="outlined">
            <h1>Title</h1>
            <p>Content</p>
            <pre>xs: 3</pre>
          </PaperStyled>
        </Item>
        <Item item lg={3} md={4} xs={10}>
          <PaperStyled variation="outlined">
            <h1>Title</h1>
            <p>Content</p>
            <pre>xs: 3</pre>
          </PaperStyled>
        </Item>
        <Item item lg={3} md={4} xs={10}>
          <PaperStyled variation="outlined">
            <h1>Title</h1>
            <p>Content</p>
            <pre>xs: 3</pre>
          </PaperStyled>
        </Item>
      </Container>
      <Container container spacing={3}>
        {!data ? (
          <Loading size={50} />
        ) : (
          data.map(({ name, content }, index) => (
            <Item key={index} item>
              <PaperStyled elevation={3}>
                <h1>{name}</h1>
                <p>{content}</p>
              </PaperStyled>
            </Item>
          ))
        )}
      </Container>
    </>
  );
};

export default MainGrid;
