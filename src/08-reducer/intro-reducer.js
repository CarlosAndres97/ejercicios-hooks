// Definimos el estado inicial con un array que contiene una tarea
const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

// Definimos la función reducer que manejará los cambios de estado
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

// Inicializamos nuestras tareas llamando al reducer sin acción
let todos = todoReducer();

// Creamos un nuevo TODO
const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

// Creamos la acción para añadir el TODO
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

// Actualizamos el estado llamando al reducer con el estado actual y la acción
todos = todoReducer(todos, addTodoAction);

// Mostramos el resultado
console.log({ state: todos });
