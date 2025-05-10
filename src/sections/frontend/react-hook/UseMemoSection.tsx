import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentMemo = `
import { FC, useState, useMemo } from 'react';

const Memofilter : FC = () => {
  const [filtro, setFiltro] = useState<string>('');
  const [numeros, setNumeros] = useState<number[]>([1, 2, 3, 4, 5]);

  const numerosFiltrados = useMemo(() => {
    console.log('Filtrando números');
    return numeros.filter(num => num.toString().includes(filtro));
  }, [filtro, numeros]);

  return (
    <div>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Filtrar números"
      />
      <ul>
        {numerosFiltrados.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Memofilter;

`;

const HookUseMemoSection = () => {
  return (
    <div className="text-left mt-5">
      <TypographyH2
        text="useMemo"
        className="text-blue-600 dark:text-blue-500"
      />
      <TypographyP className="my-4">
        useMemo en React se utiliza para memorizar y optimizar cálculos costosos
        o repetitivos, evitando que se recalculen en cada renderizado del
        componente si no es necesario.
      </TypographyP>
      <CodeEditor language="javascript" content={contentMemo} />
      <TypographyP className="mt-4">
        Filtra los números solo cuando cambia filtro o numeros. Esto evita que
        la lista se filtre constantemente en cada renderizado.
      </TypographyP>
    </div>
  );
};
export default HookUseMemoSection;
