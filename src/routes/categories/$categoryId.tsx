import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Code, Filter } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allPosts, categories } from "@/data/data";

export const Route = createFileRoute("/categories/$categoryId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { categoryId } = Route.useParams();
  const category = categories.find((category) => category.slug === categoryId);
  console.log(category);

  if (!category) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Categoría no encontrada</h1>
        <p className="text-muted-foreground mb-8">
          La categoría que buscas no existe.
        </p>
        <Button asChild>
          <Link to="/categories">Ver todas las categorías</Link>
        </Button>
      </div>
    );
  }

  const posts = allPosts[category.slug as keyof typeof allPosts] || [];
  console.log(posts);

  return (
    <main className="container py-8">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link to="/categories">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Todas las categorías
          </Link>
        </Button>
      </div>

      <section className="mb-12">
        <div className="flex flex-col gap-2 mb-8">
          <div className="inline-flex items-center gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <Code className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold">{category.name}</h1>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            {category.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Filtrar por:</span>
          </div>

          <Select defaultValue="todos">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por etiqueta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas las etiquetas</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="nextjs">Next.js</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    {post.date}
                  </div>
                  <Link
                    to="/categories/articles"
                    className="text-sm font-medium"
                  >
                    Leer más
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="container py-12 text-center">
              <h1 className="text-3xl font-bold mb-4">Articulos </h1>
              <p className="text-muted-foreground mb-8">
                La categoría que buscas no tiene articulos.
              </p>
              <Button asChild>
                <Link to="/categories">Ver todas las categorías</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
