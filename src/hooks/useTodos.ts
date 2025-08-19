import { useState } from "react";
import type { Todo } from "../types/todo";
import { createTodo } from "../utils/todoUtils";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo = createTodo(title);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    completedCount,
    activeCount,
    totalCount: todos.length,
  };
};
