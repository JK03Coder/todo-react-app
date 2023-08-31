import { TodoItem } from "./TodoItem";

export function CompletedList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="flex flex-col gap-2">
      {todos
        .filter((todo) => todo.completed)
        .map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
    </ul>
  );
}
