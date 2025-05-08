import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentSync = `
let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }]
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}


import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

export default function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Agregar tarea</button>
      <hr />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}


`;

const HookUseSyncExternalStoreSection = () => {
  return (
    <div className="mt-6">
      <TypographyH2 text="useSyncExternalStore" />
      <TypographyP className="mt-4 dark:text-gray-400">
        useSyncExternalStore es un Hook de React que te permite suscribirte a
        una fuente de almacenamiento de datos (store) externa.
      </TypographyP>
      <CodeEditor language="javascript" content={contentSync} />
    </div>
  );
};
export default HookUseSyncExternalStoreSection;
