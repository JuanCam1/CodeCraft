import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentMemo = `
import { useOptimistic } from 'react';

function AppContainer() {
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // updateFn
    (currentState, optimisticValue) => {
      // combinado y devuelve el nuevo estado
      // con el valor optimista
    }
  );
}
`;

const HookUseOptimisticSection = () => {
  return (
    <div className="text-left mt-5 w-full">
      <TypographyH2
        text="useOptimistic"
        className="text-blue-600 dark:text-blue-500"
      />
      <TypographyP className="my-4">
        useOptimistic es un Hook de React que te permite actualizar la interfaz
        de usuario / UI de manera optimista.
      </TypographyP>
      <CodeEditor language="javascript" content={contentMemo} />
    </div>
  );
};
export default HookUseOptimisticSection;
