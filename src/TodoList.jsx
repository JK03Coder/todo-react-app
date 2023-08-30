import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="px-6 flex flex-col gap-1.5 mt-1">
      {todos.map((todo) => {
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
