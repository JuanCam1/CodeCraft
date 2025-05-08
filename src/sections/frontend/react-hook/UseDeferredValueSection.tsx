import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/shared/h2";
import TypographyP from "@/components/shared/p";

const contentDeferred = `
import {use} from 'react';
import { fetchData } from './data.js';

export default function SearchResults({ query }) {
  if (query === '') {
    return null;
  }
  const albums = use(fetchData('/search?q=&#36;{query}'));
  if (albums.length === 0) {
    return <p>No matches for <i>"{query}"</i></p>;
  }
  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <label>
        Buscar álbumes:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  );
}`;

const HookUseDeferredValueSection = () => {
  return (
    <div className="mt-6">
      <TypographyH2 text="useDeferredValue" />
      <TypographyP className="my-4 text-gray-400">
        useDeferredValue es un Hook de React que permite realizar una
        actualización en diferido de una parte de la UI.
      </TypographyP>
      <CodeEditor language="javascript" content={contentDeferred} />
      <TypographyP className="mt-4">
        useDeferredValue se utiliza para almacenar el valor de la consulta de
        búsqueda en un estado deferred. Esto permite que la UI se actualice
        inmediatamente cuando cambia la consulta, sin esperar a que se complete
        la carga de datos. En este ejemplo, el componente SearchResults se carga
        en segundo plano mediante Suspense, y useDeferredValue se utiliza para
        almacenar el valor de la consulta en un estado deferred. Cuando la
        consulta cambia, useDeferredValue se actualiza inmediatamente, lo que
        permite que la UI se actualice inmediatamente con el nuevo valor de la
        consulta.
      </TypographyP>
    </div>
  );
};
export default HookUseDeferredValueSection;
