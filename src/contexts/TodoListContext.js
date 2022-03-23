import { createContext } from "react";
import useTodos from "../hooks/useTodos";

const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
  const { todos, createTodo,  deleteTodo, clearAllPost } =
    useTodos();

  return (
    <TodoListContext.Provider
      value={{ todos, createTodo, deleteTodo, clearAllPost }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;

export { TodoListContext };
