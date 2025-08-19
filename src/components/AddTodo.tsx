import { useState } from "react";

interface AddTodoProps {
  onAdd: (title: string) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <div className="add-todo-input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="add-todo-input"
          autoFocus
        />
        <button 
          type="submit" 
          className="add-todo-button"
          disabled={!title.trim()}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};
