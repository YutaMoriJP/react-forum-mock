import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const CardStyled = styled(Card)``;
const CardUI = () => {
  return (
    <Grid item xs={8} sm={5} md={4} lg={3}>
      <CardStyled elevation={20}>
        <CardActionArea>
          <CardMedia
            image={require("../img/bayernlogo.png")}
            style={{ height: 140 }}
          />
        </CardActionArea>
        <CardContent>
          <h2>Title</h2>
          <p>
            Reincarnated as a slime received a second season and is quite a bit
            darker than the first one.
          </p>
        </CardContent>
        <CardActions>
          <Button color="primary">Open Link</Button>
          <Button color="primary">Close Link</Button>
        </CardActions>
      </CardStyled>
    </Grid>
  );
};

export default CardUI;
