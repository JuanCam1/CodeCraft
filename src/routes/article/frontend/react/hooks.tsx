import { createFileRoute } from "@tanstack/react-router";
import TypographyH2 from "@/components/shared/h2";
import reactHook from "@/assets/images/hooks.webp";
import TypographyP from "@/components/shared/p";
import HookUseStateSection from "@/sections/frontend/react-hook/UseStateSection";
import HookUseEffectSection from "@/sections/frontend/react-hook/UseEffectSection";
import HookUseFormStatusSection from "@/sections/frontend/react-hook/useFormStatusSection";
import HookUseActionState from "@/sections/frontend/react-hook/UseActionState";
import HookUseOptimisticSection from "@/sections/frontend/react-hook/useOptimisticSection";
import HookUseMemoSection from "@/sections/frontend/react-hook/UseMemoSection";
import HookUseCallbackSection from "@/sections/frontend/react-hook/UseCallbackSection";
import HookUseRefSection from "@/sections/frontend/react-hook/UseRefSection";
import HookUseIdSection from "@/sections/frontend/react-hook/UseIdSection";
import HookUseDeferredValueSection from "@/sections/frontend/react-hook/UseDeferredValueSection";
import HookUseTransicitionSection from "@/sections/frontend/react-hook/UseTransicitionSection";
import HookUseLayoutEffectSection from "@/sections/frontend/react-hook/UseLayoutEffectSection";
import HookUseSyncExternalStoreSection from "@/sections/frontend/react-hook/UseSyncExternalStoreSection";
import HookUseContextSection from "@/sections/frontend/react-hook/UseContextSection";
import HookUseReducerSection from "@/sections/frontend/react-hook/UseReducerSection";
import HookUseDebugValueSection from "@/sections/frontend/react-hook/useDebugValueSection";

export const Route = createFileRoute("/article/frontend/react/hooks")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="lg:w-[900px] max-md:px-5 py-4">
      <div className="flex flex-col items-center gap-4 text-center ">
        <TypographyH2
          text="React Hooks"
          className="text-5xl text-center text-blue-600 dark:text-blue-500"
        />
        <div className="w-full h-[500px] rounnded-md overflow-hidden bg-red-400">
          <img
            src={reactHook}
            className="w-full object-cover"
            alt="React Hooks"
          />
        </div>
        <div>
          <TypographyH2
            text="¿Qué son los hooks?"
            className="text-blue-600 dark:text-blue-500 mt-6 text-4xl"
          />
          <TypographyP className="mt-4 text-justify">
            Los hooks de React son una característica introducida en React 16.8
            que permiten usar el estado, el ciclo de vida, y otras
            funcionalidades de React dentro de componentes funcionales, que
            antes eran más limitados comparados con los componentes de clase.
            Antes de los hooks, si querías manejar estado o realizar efectos
            secundarios (como llamadas a una API o suscribirte a eventos),
            tenías que usar un componente de clase. Con los hooks, ahora puedes
            escribir componentes más concisos, reutilizables y fáciles de
            mantener usando solo funciones.
          </TypographyP>
        </div>
        <HookUseStateSection />
        <HookUseEffectSection />
        <HookUseFormStatusSection />
        <HookUseActionState />
        <HookUseOptimisticSection />
        <HookUseMemoSection />
        <HookUseCallbackSection />
        <HookUseRefSection />
        <HookUseContextSection />
        <HookUseIdSection />
        <HookUseReducerSection />
        <HookUseDeferredValueSection />
        <HookUseDebugValueSection />
        <HookUseTransicitionSection />
        <HookUseLayoutEffectSection />
        <HookUseSyncExternalStoreSection />
        {/* <div className="flex flex-col">
        <TypographyH3 text="Referencias" className="text-xl" />
        <Link to="https://bluuweb.dev/05-react/04-useEffect.html">
          <SpanBlue text="bluuweb" />
        </Link>
        <Link to="https://es.react.dev/">
          <SpanBlue text="react" />
        </Link>
      </div> */}
        <span className="text-gray-400 text-xs">03 Enero 2024</span>
      </div>
    </main>
  );
}
