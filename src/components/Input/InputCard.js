import React, { useState, useContext } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  card: {
    width: '280px',
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: '#5AAC44',
    color: '#fff',
    '&:hover': {
      background: fade('#5AAC44', 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

export default function InputCard() {
  // styles
  const classes = useStyle();

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            multiline
            fullWidth
            inputProps={{ className: classes.input }}
            placeholder='Enter your next todo'
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm}>Add Card</Button>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
