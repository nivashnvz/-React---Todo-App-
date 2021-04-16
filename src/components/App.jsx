import React, { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newInput = event.target.value;
    setInputItem(newInput);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });
    setInputItem("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const customStyle={color:"red",fontSize: "12px"}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
          <div >
          <p style={customStyle}>(click on the task once completed)</p>
          </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todo, index) => (
            <Todolist id={index} text={todo} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
