import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function WishList() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  function onChangeInput(event) {
    const value = event.target.value;
    setTodo(value);
  }

  function addTodo() {
    setTodoList([...todoList, { id: uuid(), todo: todo }]);
    setTodo("");
  }

  function deleteTodo(id) {
    const filteredList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredList);
  }
  return (
    <div>
      <input
        value={todo}
        onChange={onChangeInput}
        placeholder="Enter your wish"
      />
      <button onClick={addTodo}>Add</button>
      <div>
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <div key={todo.id}>
              <label>
                <input type="checkbox" />
                <span>{todo.todo}</span>
                <button onClick={() => deleteTodo(todo.id)}>Remove</button>
                <br />
              </label>
            </div>
          ))}
      </div>
    </div>
  );
}
