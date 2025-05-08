import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentId = `
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}`;
const HookUseIdSection = () => {
  return (
    <div className="mt-6">
      <TypographyH2 text="useId" />
      <TypographyP className="my-4 dark:text-gray-400">
        useId es un Hook de React que permite generar un identificador único
        para cada elemento dentro de un componente. Es especialmente útil para
        mejorar la accesibilidad y asegurar que los IDs generados sean únicos
        incluso en componentes dinámicos o reutilizables.
      </TypographyP>
      <CodeEditor language="javascript" content={contentId} />
      <TypographyP className="mt-4">
        useId se utiliza para generar un identificador único (passwordHintId)
        para el mensaje de ayuda asociado al campo de contraseña. Este ID único
        se asigna tanto al atributo aria-describedby del campo de entrada como
        al elemento &#60;p&#62; que muestra la información adicional sobre los
        requisitos de la contraseña. Esto mejora la accesibilidad, ya que los
        usuarios con necesidades especiales podrán asociar correctamente el
        mensaje de ayuda al campo correspondiente.
      </TypographyP>
    </div>
  );
};
export default HookUseIdSection;
