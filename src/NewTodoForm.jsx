import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("");
  }

  return (
    <form className="p-6 flex flex-col gap-1" onSubmit={handleSubmit}>
      <div className="">
        <label className="block my-1" htmlFor="item">
          New Item
        </label>
        <input
          className="bg-blue-400 border-2 border-blue-300 w-full rounded-md pl-1.5 text-white placeholder:text-blue-900/40"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="add an item"
        />
      </div>
      <button className="bg-blue-300 border-2 border-blue-500 rounded-md text-blue-500 ">
        Add
      </button>
    </form>
  );
}