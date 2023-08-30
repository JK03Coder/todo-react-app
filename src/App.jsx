import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="max-w-md mx-auto">
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="px-6 text-2xl font-medium">Todo List</h1>
      <ul className="px-6 flex flex-col gap-1.5 mt-1">
        {todos.length === 0 && <p>You have nothing to do</p>}
        {todos.map((todo) => {
          return (
            <li className="flex" key={todo.id}>
              <label className="flex-1 cursor-pointer border-2 mr-2 px-2.5 rounded-md select-none">
                <input
                  className="mr-1.5 cursor-pointer"
                  type="checkbox"
                  checked={todo.checked}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="bg-red-500/50 px-2.5 rounded-md border-2 border-red-500 text-red-500"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
