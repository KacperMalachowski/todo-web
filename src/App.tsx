import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import "./App.css";
import "./styles/todo.css";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
        <p>Stay organized and get things done!</p>
      </header>

      <main className="app-main">
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
    </div>
  );
}

export default App;

export default App;
