import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();
  return (
    <div className="animate-fade-up animate-duration-[800ms] animate-ease-in lg:w-[1200px] flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] text-blue-600 dark:text-blue-500">
        El Arte de Crear Software
      </h1>
      <p className="max-w-[750px] text-lg text-center text-muted-foreground sm:text-xl">
        Un espacio para descubrir y compartir sobre desarrollo de software, con
        artículos, tutoriales y recursos útiles para programadores de todos los
        niveles.
      </p>
      <Button
        onClick={() => {
          navigate({
            to: "/categories",
          });
        }}
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300 cursor-pointer"
      >
        Explorar artículos
        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
