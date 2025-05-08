import TypographyH1 from "./h1";
import TypographyH2 from "./h2";
import TypographyP from "./p";

const About = () => {
  return (
    <div>
      <TypographyH1
        text="CodeCraft"
        className="inline-block bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent"
      />
      <TypographyH2 text="El Arte de Crear Software" className="mt-2 mb-6" />
      <TypographyP className="mb-12 text-gray-700 text-pretty">
        Es un espacio dedicado a explorar el fascinante mundo del desarrollo de
        software. Aquí, compartiremos conocimientos, experiencias y recursos
        para programadores de todos los niveles. Desde fundamentos hasta
        tecnologías emergentes, encontrarás artículos prácticos, tutoriales, y
        reflexiones sobre cómo construir soluciones innovadoras.
      </TypographyP>
    </div>
  );
};
export default About;
