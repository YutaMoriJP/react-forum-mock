import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CardStyled = styled(Card)``;
const CardUI = () => {
  const matches = useMediaQuery("(min-width: 700px)");
  const mobile = useMediaQuery("(max-width: 500px)");
  console.log(matches);
  return (
    <Grid item xs={mobile ? 10 : matches ? 4 : 6}>
      <CardStyled>
        <CardActionArea>
          <CardMedia
            image="https://gogocdn.net/cover/tensei-shitara-slime-datta-ken-2nd-season.png"
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
