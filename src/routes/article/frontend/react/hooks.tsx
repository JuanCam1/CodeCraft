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
    <>
      <TypographyH2 text="React Hooks" className="text-3xl text-center" />
      <div className="flex justify-center items-center">
        <div className="w-[50%] h-[300px] overflow-hidden">
          <img
            src={reactHook}
            className="rounded-md w-full object-cover"
            alt="React Hooks"
          />
        </div>
      </div>
      <div>
        <TypographyH2 text="¿Qué son los hooks?" />
        <TypographyP className="mt-4">
          Los hooks en React son funciones especiales que permiten "enganchar"
          (hook into) las características de React, como el estado y el ciclo de
          vida, dentro de componentes funcionales. Antes de los hooks, estas
          características solo estaban disponibles en los componentes de clase.
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
    </>
  );
}
