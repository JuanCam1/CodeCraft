import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentTransition = `
import { useState, useTransition } from "react";

const fetchData = async (city: string) => {
  try {
    const response = await fetch("https://api.weatherapi.com/v1/current.json");
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return "Error fetching data catch example";
  }
};

const App = () => {
  const [city, setCity] = useState("");
  const [isPending, startTransition] = useTransition();

  const [weather, setWeather] = useState(null);

  const handleSubmit = () => {
    startTransition(async () => {
      const data = await fetchData(city);
      setWeather(data);
    });
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>

      {isPending && <div>Loading...</div>}
      {weather && <pre>{JSON.stringify(weather, null, 2)}</pre>}
    </div>
  );
};

export default App;
`;

const HookUseTransicitionSection = () => {
  return (
    <div className="text-left mt-5">
      <TypographyH2
        text="useTransition"
        className="text-blue-600 dark:text-blue-500"
      />
      <TypographyP className="my-4 dark:text-gray-400">
        useTransition es un hook que permite retrasar la renderización de un
        componente hasta que se cumplan ciertas condiciones. Esto es útil para
        evitar que la interfaz de usuario se bloquee mientras se realizan tareas
        pesadas, como la carga de datos o la animación de elementos.
      </TypographyP>
      <CodeEditor language="javascript" content={contentTransition} />
      <TypographyP className="mt-4">
        Este código utiliza useTransition en React para manejar la transición de
        estado mientras se carga asíncronamente datos desde una API para obtener
        información meteorológica basada en una ciudad. El hook useTransition
        permite realizar una carga en segundo plano sin bloquear la interfaz del
        usuario, mejorando así la experiencia mientras se muestra un mensaje de
        carga. La función fetchData realiza la solicitud a la API y el estado se
        actualiza en tiempo real, reflejando los resultados o cualquier error en
        caso de fallo.
      </TypographyP>
    </div>
  );
};
export default HookUseTransicitionSection;
