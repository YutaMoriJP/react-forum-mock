import React, { useReducer } from "react";
import useInput from "./useInput";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import NoteDisplay from "./NoteDisplay";
import { v4 as uuidv4 } from "uuid";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const Container = styled.article`
  display: flex;
  justify-content: center;
  gap: 10px;
  button {
    align-self: center;
    padding: 12px;
  }
`;

const add = action => ({ note: action.payload.note, id: action.payload.id });

const remove = (state, action) =>
  state.filter(note => note.id !== action.payload.id);

const complete = (state, action) =>
  state.map(note =>
    action.payload.id === note.id
      ? { ...note, completed: !note.completed }
      : note
  );

const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, add(action)];
    case "REMOVE":
      return remove(state, action);
    case "COMPLETE":
      return complete(state, action);
    default:
      return state;
  }
};

const Note = () => {
  const [value, reset] = useInput("");
  const [notes, noteDispatch] = useReducer(noteReducer, []);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const handleSubmit = () =>
    noteDispatch({
      type: "ADD",
      payload: { note: value.value, id: uuidv4(), completed: false },
    });
  return (
    <>
      <Container>
        <TextField
          size="medium"
          {...value}
          variant="outlined"
          label="Take Note"
        />
        <Button
          endIcon={<AddIcon />}
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Add Note
        </Button>
      </Container>
      <Grid
        direction={isMobile ? "column" : "row"}
        align="center"
        justify="center"
        container
        spacing={1}
        style={{ margin: "10px auto" }}
      >
        <>
          {!!notes.length &&
            notes.map(note => (
              <NoteDisplay key={note.id} {...note} dispatch={noteDispatch} />
            ))}
        </>
      </Grid>
    </>
  );
};

export default Note;
