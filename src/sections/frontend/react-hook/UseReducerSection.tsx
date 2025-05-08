import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentReducer = `
import { useReducer } from "react";

// Estado inicial: una lista de tareas con sus propiedades
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

// Reducer: maneja las acciones para actualizar el estado
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

// Componente principal para mostrar y manejar la lista de tareas
function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
`;

const HookuseReducerSection = () => {
  return (
    <div className="mt-6">
      <TypographyH2 text="useReducer" />
      <TypographyP className="my-4 dark:text-gray-400">
        useReducer es un hook de React que se utiliza para manejar estados
        complejos o lógicos con múltiples actualizaciones en función de acciones
        específicas. Funciona similar a useState, pero utiliza un enfoque basado
        en "acciones" y un "reducer", lo que hace que sea ideal para manejar
        estructuras de estado complejas, como objetos o arrays.
      </TypographyP>
      <CodeEditor language="javascript" content={contentReducer} />
      <TypographyP className="mt-4">
        utiliza useReducer para gestionar una lista de tareas (todos) donde cada
        tarea puede ser marcada como completada o no. El estado inicial se
        define con un array de objetos, cada uno con un id, title y complete
        (estado booleano). La función reducer maneja la acción "COMPLETE" para
        alternar el estado de complete de la tarea específica seleccionada por
        su id. En el componente Todos, se utiliza useReducer para manejar este
        estado, y dispatch despacha la acción al reducer. Cada tarea se
        renderiza con un checkbox, y al marcarlo, se actualiza su estado
        mediante la acción despachada, reflejando en tiempo real los cambios en
        el estado.
      </TypographyP>
    </div>
  );
};
export default HookuseReducerSection;
