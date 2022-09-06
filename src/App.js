import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import "./App.css";
import Todo from './Todo';

import { db } from './firebaseDB';
import firebase from "firebase/compat/app";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed.
  useEffect(() => {
    // This fuction will invoked when the app.js loads
    // by using snapshot -> on any changes in todos collection the document will be checked
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
    })
  }, []);

  function addTask(event) {
    event.preventDefault();  // will stop the refresh
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  }


  return (
    <div className="App">
      <h1>ToDo List</h1>

      <form>
        <FormControl id="todo_input" autoComplete="off">
          <InputLabel>Write a todo</InputLabel>
          <Input id="task" value={input} onChange={event => setInput(event.target.value)} autoComplete="none" />
          <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={addTask}> + </Button>
        </FormControl>
      </form>

      <ul id="tasks">
        {todos.map((todoObj) => {
          return <Todo todo={todoObj.todo} id={todoObj.id} />;
        })}
      </ul>
    </div>
  );
}

export default App;
