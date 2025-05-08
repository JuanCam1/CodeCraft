import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentState = `
import { FC, useState } from "react";

const ContadorState : FC = () => {
  const [contador, setContador] = useState<number>(0);

  const incrementar = () => setContador(contador + 1);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

`;

const HookUseStateSection = () => {
  return (
    <div>
      <TypographyH2 text="useState" />
      <TypographyP className="my-4">
        useState se utiliza para manejar y mantener el estado local en un
        componente funcional. Permite a los desarrolladores declarar variables
        de estado y actualizarlas a medida que cambia la lógica del componente.
      </TypographyP>
      <CodeEditor language="javascript" content={contentState} />
      <TypographyP className="mt-4">
        <span className="mr-2 font-bold">
          const [contador, setContador] = useState&#60;number&#62;(0);
        </span>
        define un estado contador inicializado con 0. setContador es una función
        para actualizar ese estado.
      </TypographyP>
      <TypographyP className="mt-4">
        <span className="mr-2 font-bold">
          const incrementar = () =&#62; setContador(contador + 1);
        </span>
        aumenta el valor del estado contador en uno cada vez que se llama.
      </TypographyP>
      <TypographyP className="mt-4">
        El estado contador se muestra en pantalla y se actualiza al hacer clic
        en el botón "Incrementar".
      </TypographyP>
    </div>
  );
};
export default HookUseStateSection;
