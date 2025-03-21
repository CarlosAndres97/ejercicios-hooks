import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-reducer/todoReducer";

export const useTodo = (initialState = []) => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }
  const handleToggleTodo = ( id ) => {
    
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    todosPending: todos.filter(todo => !todo.done).length,
  };
};
