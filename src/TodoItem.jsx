export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="flex" key={id}>
      <label
        className={`flex-1 cursor-pointer border-2 mr-2 px-2.5 py-0.5 rounded-md select-none
        ${completed && "line-through"} dark:bg-white/30 text-black dark:text-white dark:hover:bg-white/40
        transition-colors bg-gray-50 hover:bg-gray-100/80`}
      >
        <input
          className="mr-1.5 cursor-pointer align-baseline"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="bg-red-500/50 px-2.5 py-0.5 rounded-md border-2 border-red-500 text-red-500 h-min self-center select-none
        hover:bg-red-500/60 transition-all shadow-md shadow-red-500/60"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
