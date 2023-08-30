export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="flex" key={id}>
      <label className="flex-1 cursor-pointer border-2 mr-2 px-2.5 rounded-md select-none">
        <input
          className="mr-1.5 cursor-pointer"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="bg-red-500/50 px-2.5 rounded-md border-2 border-red-500 text-red-500 h-min self-center"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
