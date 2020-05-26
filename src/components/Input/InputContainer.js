import React, { useState, useContext } from 'react';
import {
  Paper,
  InputBase,
  Button,
  IconButton,
  Typography,
  Collapse,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles, fade } from '@material-ui/core/styles';
import InputCard from './InputCard';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    marginTop: theme.spacing(2),
  },
  addCart: {
    padding: theme.spacing(1, 1, 1, 2),
    background: '#EBECF0',
    '&:hover': {
      backgroundColor: fade('#000', 0.25),
    },
  },
}));

export default function InputContainer() {
  // ref to js styles
  const classes = useStyle();
  //   states for open-collapse
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCart}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography> + Add a Card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
}

// when user clicks this component -new todo form will open
