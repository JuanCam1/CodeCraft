import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentRef = `
import { FC, useRef } from 'react';

const RefExample : FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <div>
      <input ref={ref} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
};
`;

const HookUseRefSection = () => {
  return (
    <div className="mt-6">
      <TypographyH2 text="useRef" />
      <TypographyP className="my-4 dark:text-gray-400">
        useRef en React se utiliza para crear una referencia mutable que puede
        almacenar un valor y persistirlo entre renderizados sin causar una
        re-renderización del componente cuando el valor cambia.
      </TypographyP>
      <CodeEditor language="javascript" content={contentRef} />
      <TypographyP className="mt-4">
        Este componente utiliza el hook useRef para crear una referencia (ref)
        que apunta a un elemento input. Cuando se hace clic en el botón, la
        función handleClick verifica si la referencia no es nula (ref.current) y
        luego utiliza el método focus() para enfocar el campo de entrada. Esto
        permite interactuar directamente con el DOM del input sin necesidad de
        estado adicional, logrando un enfoque eficiente y limpio.
      </TypographyP>
    </div>
  );
};
export default HookUseRefSection;
