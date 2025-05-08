import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentForm = `
import { useFormStatus } from "react-dom";
import action from './actions';

function Submit() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Enviar</button>
}

export default function App() {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

`;

const HookUseFormStatusSection = () => {
  return (
    <div>
      <TypographyH2 text="useFormStatus" />
      <TypographyP className="my-4">
        useFormStatus es un Hook que brinda información de estado del último
        formulario enviado.
      </TypographyP>
      <CodeEditor language="javascript" content={contentForm} />
      <TypographyP className="mt-4">
        Para obtener información de estado, el componente de Enviar tiene que
        ser renderizado dentro de un &#60;form&#62;. El Hook retorna información
        como la propiedad pending que te dice si el formulario se está enviando
        activamente. En el ejemplo de arriba, Enviar usa esta información para
        deshabilitar la pulsación de &#60;button&#62; mientras el formulario se
        está enviando.
      </TypographyP>
    </div>
  );
};

export default HookUseFormStatusSection;
