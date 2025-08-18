import type { Todo } from '../types/todo';

/**
 * Generate a unique ID for a todo item
 */
export const generateTodoId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Create a new todo item with default values
 */
export const createTodo = (title: string): Todo => {
  return {
    id: generateTodoId(),
    title: title.trim(),
    completed: false,
    createdAt: new Date(),
  };
};
