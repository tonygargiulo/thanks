import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';




function GratList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  return (
    <div>
      <Grid item xs={6}>
        <Typography variant='h4'>Add some items!</Typography>
        <List dense={true}>
          {items.map(item =>
            <ListItem key={item.id}>
              <ListItemText primary={item.text} />
              <IconButton onClick={() => handleDeleteItem(item.id)} aria-label="Delete"><DeleteIcon /></IconButton>
            </ListItem>)}
        </List>
        <form onSubmit={handleSubmit}>
          <TextField type='text' variant='outlined' value={input} onChange={(e) => setInput(e.target.value)} />
          <TextField type='submit' variant='outlined' value='Add' />
        </form>
        <Button onClick={(e) => setItems([])} color='secondary' variant='contained'>Clear List</Button>
      </Grid>
    </div>
  )


  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, {text: input, dateCreated: new Date(), id: Date.now()}]);
    setInput('');
  }

  function handleDeleteItem(id) {
    setItems(items.filter(item => item.id !== id));
  }


}

export default GratList;
