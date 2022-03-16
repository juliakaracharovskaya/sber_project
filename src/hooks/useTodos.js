import { useEffect, useState } from "react";

const LSTodosKey = "todos";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = async (text, topic, image, input, tags) => {
    const newTodo = {
      id: Date.now(),
      text,
      topic,
      image,
      input,
      tags,
    };

    setTodos((prev) => [...prev, newTodo]);
  };



  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSTodosKey);
    if (dataFromLS) {
      setTodos(JSON.parse(dataFromLS));
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem(LSTodosKey, JSON.stringify(todos));
  }, [todos]);


	return {
		todos,
		createTodo,
		deleteTodo,
		clearAllTodos,
	}
};

export default useTodos
