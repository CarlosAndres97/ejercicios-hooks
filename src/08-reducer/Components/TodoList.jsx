import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo ,onToggleTodo}) => {
  return (
    <>
      {/* TodoList */}
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}  
          />
        ))}
      </ul>
      {/* Fin TodoList */}
    </>
  );
};
