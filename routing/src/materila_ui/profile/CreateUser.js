import TextField from "@material-ui/core/TextField";
import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const CreateUser = ({ value, onChange, handleSubmit }) => {
  const handleChange = e => onChange(e.target.value);
  return (
    <Grid container spacing={1} justify="center" alignItems="center">
      <Grid item>
        <TextField
          autoFocus={true}
          value={value}
          onChange={handleChange}
          variant="outlined"
          label="Choose Username"
        />
      </Grid>
      <Grid item>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Choose Username
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateUser;
