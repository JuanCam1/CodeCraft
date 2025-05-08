import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { recentPosts } from "@/data/data";
import { Link } from "@tanstack/react-router";

const PostList = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Artículos</h2>
        <Button variant="outline">Ver todos</Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
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
              <div className="text-sm text-muted-foreground">{post.date}</div>
              <Link
                to={`/articulos/${post.slug}`}
                className="text-sm font-medium"
              >
                Leer más
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default PostList;
