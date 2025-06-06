import { createFileRoute, Link } from "@tanstack/react-router";
import { Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/data";

export const Route = createFileRoute("/categories/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="lg:w-[900px]   py-8">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-6">
        <h1 className="text-blue-600 dark:text-blue-500 text-2xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Categorías
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Explora nuestros artículos por categorías y encuentra el contenido que
          más te interesa.
        </p>
      </div>

      <section className="py-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/categories/$categorySlug"
              params={{
                categorySlug: category.slug,
              }}
            >
              <Card className="overflow-hidden h-full transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      <Code className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-500">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
