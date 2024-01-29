// App.js
import './App.css';
import React, { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  const addList = () => {
    setTodoList([...todoList, value]);
    setValue("");
  }
  const onChangeValue = (e) => {
    setValue(e.target.value);
  }
  const deletTask = (toDelete) => {
    const newTodolist = todoList.filter((value, key) => key !== toDelete);
    setTodoList(newTodolist);
  }

  return (
    <div className="App">
      <input onChange={onChangeValue} value={value}></input>
      <button onClick={addList}>Add</button>
      {todoList.map((value, key) => {
        return (
          <><h1>{value}</h1>
            <button onClick={() => deletTask(key)}>x</button>
          </>
        )
      })}
    </div>
  );
}

export default App;
