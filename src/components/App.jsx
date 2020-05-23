import React, { useState } from "react";
import TodoItem from "./ToDoItem";
function App() {
  const [inputText, setText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setText("");
  }
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
