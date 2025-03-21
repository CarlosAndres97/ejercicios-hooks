import { TodoList } from "./Components/TodoList";
import { TodoAdd } from "./Components/TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {

  const {todos,todosCount,todosPending, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {todosPending}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo = {handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
