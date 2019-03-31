import React, { useState } from 'react';


function List() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  return (
    <div>
      <h2>Add Some Items!</h2>
      <ul>
        {items.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <input type='submit' value='Add' />
      </form>
      <button onClick={(e) => setItems([])}>Clear List</button>
    </div>
  )


  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, {text: input, dateCreated: new Date(), id: Date.now()}]);
    setInput('');
  }
}

export default List;
