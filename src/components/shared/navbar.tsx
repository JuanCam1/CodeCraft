import { Link, useLocation } from "@tanstack/react-router";
import Options from "./options";
import { Code, Search } from "lucide-react";
import { Input } from "../ui/input";
import { categories } from "@/data/data";

const Navbar = () => {
  const { pathname } = useLocation();

  const validSlugs = categories.map((c) => c.slug);

  const match = pathname.match(/^\/categories\/([^\/]+)$/);
  const currentSlug = match?.[1];
  const isValidCategory =
    currentSlug !== undefined && validSlugs.includes(currentSlug);

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-8 md:px-5 flex justify-center">
      <div className="flex h-16 items-center justify-between lg:w-[900px] md:w-full">
        <Link to="/">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <Code className="h-6 w-6 text-blue-600 dark:text-blue-500" />
            <span className="text-blue-600 dark:text-blue-500">CodeCraft</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {isValidCategory && (
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar artículos..."
                className="w-64 pl-8"
              />
            </div>
          )}
          <Options />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
