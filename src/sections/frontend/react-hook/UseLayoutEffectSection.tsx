import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentLayoutEffect = `
import { useState, useRef, useLayoutEffect } from 'react';

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);
`;

const HookUseLayoutEffectSection = () => {
  return (
    <div className="text-left mt-5">
      <TypographyH2
        text="useLayoutEffect"
        className="text-blue-600 dark:text-blue-500"
      />
      <TypographyP className="my-4 dark:text-gray-400">
        useLayoutEffect es una versión de useEffect que se acciona antes que el
        navegador vuelva a pintar la pantalla.
      </TypographyP>
      <CodeEditor language="javascript" content={contentLayoutEffect} />
      <TypographyP className="mt-4">
        Tooltip se renderiza inicialmente con tooltipHeight = 0 (el tooltip
        puede estar posicionado incorrectamente). React lo coloca en el DOM y
        ejecuta el código en useLayoutEffect. Tu useLayoutEffect mide la altura
        del contenido del tooltip y dispara inmediatamente un renderizado de
        nuevo. Tooltip se vuelve a renderizar con el tooltipHeight real (el
        tooltip está posicionado correctamente). React lo actualiza en el DOM y
        el navegador finalmente muestra el tooltip.
      </TypographyP>
    </div>
  );
};
export default HookUseLayoutEffectSection;
