import React from 'react'
import { useState} from "react";

const Todo = () => {

  const [list, setList] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [text, setText] = useState(false);

 
  const handleChange = (e) => {
    setList(e.target.value);
  }

  const submitData = () => {
    if (list.trim() !== "") {
      if (editIndex !== null) {
        const updated = [...todo];
        updated[editIndex] = list;
        setTodo(updated)
        setEditIndex(null);
      } else {
        setTodo([...todo, list]);
      }
      setList("");
    }
  }

  const handleEdit = (index) => {
    setList(todo[index]);
    setEditIndex(index)
    setText(true);
  }

  const handleDelete = (e) => {
    const newTodo = todo.filter((item, index) => index !== e);
    setTodo(newTodo);
  }

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => handleChange(e)} placeholder="Enter Text" />
        <button onClick={submitData}>Submit</button>
      </div>
      <ul>
        {todo.map((item, index) => {
          if (text && index === editIndex) {
            console.log(text, list);
            return <li key={index}>
              <input type="text" onChange={(e) => handleChange(e)} placeholder="Enter Text" value={list} />
              <button onClick={submitData}>Update</button>
            </li>
          } else {
            return <li key={index}>
              {item}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          }
        })}
      </ul>
    </div>
  )
}

export default Todo
