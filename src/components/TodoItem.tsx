import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className={`todo-title ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        aria-label={`Delete ${todo.title}`}
      >
        ×
      </button>
    </div>
  );
};
