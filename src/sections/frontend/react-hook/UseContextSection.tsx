import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentContext = `
import { createContext, useContext, useState, ReactNode, FC } from 'react';

// Define el tipo para el contexto
type ThemeContextType = string;

// Crea un contexto con un valor predeterminado de 'light'
const ThemeContext = createContext<ThemeContextType>('light');

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle theme</button>
      {children}
    </ThemeContext.Provider>
  );
};

// Consumidor del contexto para leer y mostrar el tema actual
const ThemeConsumer: FC = () => {
  const theme = useContext(ThemeContext);
  return <p>The theme is: {theme}</p>; 
};

// Componente principal que combina el proveedor y el consumidor
const App: FC = () => {
  return (
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>
  );
};

export default App;

`;

const HookUseContextSection = () => {
  return (
    <div className="mt-6">
      <TypographyH2 text="useContext" />
      <TypographyP className="my-4 dark:text-gray-400">
        useContext en React se utiliza para acceder a valores proporcionados por
        un contexto. Simplifica la forma en que los datos se comparten entre
        componentes, permitiendo acceder al contexto directamente dentro de un
        componente funcional.
      </TypographyP>
      <CodeEditor language="javascript" content={contentContext} />
      <TypographyP className="mt-4">
        El contexto ThemeContext comparte el tema actual entre componentes.
        ThemeProvider maneja el estado del tema y permite alternarlo con un
        botón, mientras que ThemeConsumer usa useContext para leer y mostrar el
        tema actual. Se agregan tipos (ThemeContextType, ReactNode) para
        garantizar seguridad en los datos y evitar errores comunes al usar el
        contexto y los hooks en React.
      </TypographyP>
    </div>
  );
};
export default HookUseContextSection;
