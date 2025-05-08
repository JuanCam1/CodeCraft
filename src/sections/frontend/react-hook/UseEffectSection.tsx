import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentEffect = `
import { FC, useState, useEffect } from 'react';

const FetchUseEffect : FC = () => {
  const [data, setData] = useState<Post>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchUseEffect;

`;

const HookUseEffectSection = () => {
  return (
    <div className="mt-6">
      <TypographyH2 text="useEffect" />
      <TypographyP className="mt-4">
        Los Efectos permiten a un componente conectarse y sincronizarse con
        sistemas externos. Esto incluye lidiar con la red, el DOM del navegador,
        animaciones, widgets escritos usando una biblioteca UI distinta, y otro
        código que no sea de React.
      </TypographyP>
      <CodeEditor language="javascript" content={contentEffect} />
      <TypographyP className="mt-4">
        Este ejemplo demuestra cómo utilizar useEffect para manejar el ciclo de
        vida del componente y realizar una solicitud fetch para obtener y
        mostrar datos en la UI.
      </TypographyP>
    </div>
  );
};
export default HookUseEffectSection;
