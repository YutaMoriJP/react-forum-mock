import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import MuiDialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles(() => ({
  margin: {
    margin: 50,
  },
  padding: {
    padding: 10,
  },
}));

const Close = styled(IconButton)`
  && {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const Content = styled(MuiDialogContent)`
  flex: 1 1 auto;
`;

const PaperContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 300px;
`;

const MyDialog = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        color="primary"
        className={classes.margin}
        endIcon={<AddIcon />}
      >
        {`open my modal`.toUpperCase()}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <PaperContainer variant="outlined">
          <MuiDialogTitle>
            <Close onClick={handleClose}>
              <CloseIcon />
            </Close>
            <Typography variant="h5" className={classes.padding}>
              Testing this Modal
            </Typography>
          </MuiDialogTitle>
          <Content dividers>
            <Typography variant="h6">
              This is the place where filler content goes in.
            </Typography>
          </Content>
          <MuiDialogActions>
            <Button color="secondary">Agree to terms and conditions</Button>
          </MuiDialogActions>
        </PaperContainer>
      </Dialog>
    </>
  );
};

export default MyDialog;
