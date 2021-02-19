import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TypePography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import styled, { css } from "styled-components";
import DoneIcon from "@material-ui/icons/Done";

const PaperStyled = styled(Paper)`
  word-break: break-all;
  padding: 10px;
  border-radius: 5px;
  ${({ completed }) =>
    completed &&
    css`
      background-color: grey;
    `}
`;

const NoteDisplay = ({ note, id, dispatch, completed = false }) => {
  const handleDelete = () => dispatch({ type: "REMOVE", payload: { id } });
  const handleDone = () => dispatch({ type: "COMPLETE", payload: { id } });
  return (
    <Grid item lg={4} md={5} sm={10}>
      <PaperStyled elevation={10} completed={completed}>
        <TypePography variant="h5">{note}</TypePography>
        <Button startIcon={<DeleteIcon />} onClick={handleDelete}>
          Delete
        </Button>
        <IconButton>
          <DoneIcon onClick={handleDone} />
        </IconButton>
      </PaperStyled>
    </Grid>
  );
};

export default NoteDisplay;
