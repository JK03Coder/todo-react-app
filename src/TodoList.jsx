import { AnimatePresence } from "framer-motion";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, firstLoad }) {
  return (
    <ul className="flex flex-col gap-2">
      <AnimatePresence>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo, index) => {
            return (
              <TodoItem
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                index={index}
                firstLoad={firstLoad}
              />
            );
          })}
      </AnimatePresence>
    </ul>
  );
}
