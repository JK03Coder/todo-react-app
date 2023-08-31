export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="flex" key={id}>
      <label className={`flex-1 cursor-pointer border-2 mr-2 px-2.5 py-0.5 rounded-md select-none
      ${completed && 'line-through'} bg-white/30 dark:text-white`}>
        <input
          className="mr-1.5 my-auto cursor-pointer"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="bg-red-500/50 px-2.5 py-0.5 rounded-md border-2 border-red-500 text-red-500 h-min self-center select-none"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
