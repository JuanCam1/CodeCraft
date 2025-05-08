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

export const Route = createFileRoute("/categories/$categorySlug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { categorySlug } = Route.useParams();
  const category = categories.find(
    (category) => category.slug === categorySlug,
  );
  console.log(category);

  if (!category) {
    return (
      <div className="lg:w-[1200px] py-6 text-center">
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
    <main className="lg:w-[1200px] py-6 text-center">
      <div className="flex items-center gap-2 mb-8">
        <Link
          to="/categories"
          className="relative flex items-center after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full "
        >
          <ArrowLeft className="h-4 w-4 mr-2 " />
          Categorías
        </Link>
      </div>

      <section className="mb-12">
        <div className="inline-flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <Code className="h-6 w-6 text-blue-600 dark:text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
            {category.name}
          </h2>
        </div>

        <div className="flex items-center justify-end gap-2 mb-6">
          <Filter className="h-4 w-4" />

          <Select defaultValue="todos">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas</SelectItem>
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
              <Link
                key={post.id}
                to={post.url}
                params={{
                  categorySlug: post.slug,
                }}
                className="text-sm font-medium"
              >
                <Card className="overflow-hidden h-full transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full "
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
                    <p className="text-muted-foreground line-clamp-3 text-start">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground">
                      {post.date}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
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
