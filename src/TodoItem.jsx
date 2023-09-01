import { motion } from "framer-motion";

export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  index,
  firstLoad,
}) {
  return (
    <motion.li
      layout
      className="flex"
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: firstLoad ? index * 0.125 : 0 }}
    >
      <label
        className={`${
          completed && "line-through"
        } mr-2 flex-1 cursor-pointer select-none rounded-md border-2 bg-gray-50 px-2.5 py-0.5 text-black shadow shadow-gray-400/40 transition-all hover:bg-gray-100/80 hover:shadow-gray-400/90 dark:bg-white/30 dark:text-white dark:hover:bg-white/40`}
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
        className="h-min select-none self-center rounded-md border-2 border-red-500 bg-red-500/50 px-2.5 py-0.5 text-red-500 shadow shadow-red-500/40 transition-all hover:bg-red-500/60 hover:shadow-red-500/90"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </motion.li>
  );
}
