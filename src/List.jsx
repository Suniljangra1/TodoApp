import React, { useState } from "react";
import "./ListButy.css";
function List() {
  const [data, setData] = useState();
  const [todo, setTodo] = useState([]);
  
  return (
    <>
    
      <div className="container"  id="box">
          <h3 className="htag"> Todo List </h3> 
         
        <input
          type="text"
          placeholder="Enter Text "
          className="input"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button className="inp"
          onClick={() => {
            
            setTodo([...todo, data]);
            setData("");
          }}
        >
          Add
        </button>
        <div>
          {todo.map((b) => (
            <div key={b}>
              {b}
              <button className="inp"
                onClick={() => {
                  setTodo(todo.filter((t) => t !== b));
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default List;
