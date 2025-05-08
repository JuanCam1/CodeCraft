import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/categories/articles/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/categories/articles/"!</div>;
}
