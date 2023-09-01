import { useEffect, useMemo, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { CompletedList } from "./CompletedList";
import { motion } from "framer-motion";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  const hasCompletedTodos = useMemo(() => {
    return todos.some((todo) => todo.completed);
  }, [todos]);

  const hasUncompletedTodos = useMemo(() => {
    return !todos.some((todo) => !todo.completed);
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

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
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="my-2 text-2xl font-medium dark:text-white">Todo List</h1>
      <div className="flex flex-col">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          firstLoad={firstLoad}
        />
        {(todos.length === 0 || hasUncompletedTodos) && (
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="dark:text-white"
          >
            You have nothing to do
          </motion.p>
        )}
        {hasCompletedTodos && (
          <motion.hr
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.175 }}
            className="my-6 h-0.5 rounded border-0 bg-gray-300 dark:bg-gray-600"
          />
        )}
        <CompletedList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          firstLoad={firstLoad}
        />
      </div>
    </div>
  );
}
