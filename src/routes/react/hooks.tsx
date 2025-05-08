import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/react/hooks")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/react/hooks"!</div>;
}
