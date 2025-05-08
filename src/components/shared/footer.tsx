import { Link } from "@tanstack/react-router";
import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-6 w-6" />
            <span>CodeBlog</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Tu fuente de conocimiento en programación y desarrollo.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Navegación</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/">Inicio</Link>
              <Link to="/categorias">Categorías</Link>
              <Link to="/tutoriales">Tutoriales</Link>
              <Link to="/acerca">Acerca de</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Categorías</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/categorias/web">Desarrollo Web</Link>
              <Link to="/categorias/movil">Desarrollo Móvil</Link>
              <Link to="/categorias/ia">Inteligencia Artificial</Link>
              <Link to="/categorias/devops">DevOps</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Legal</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/privacidad">Política de Privacidad</Link>
              <Link to="/terminos">Términos de Servicio</Link>
              <Link to="/cookies">Política de Cookies</Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CodeBlog. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
