import imgReact from "../assets/images/hooks.webp";

export const categories = [
  {
    id: 1,
    name: "Desarrollo Frontend",
    slug: "frontend",
    description: "Frontend, Frameworks y más",
  },
  {
    id: 2,
    name: "Desarrollo Móvil",
    slug: "movil",
    description: "React Native, Flutter, Swift y más",
  },
  {
    id: 3,
    name: "Desarrollo De Escritorio",
    slug: "escritorio",
    description: "Electron, NW.js y más",
  },
  {
    id: 4,
    name: "Desarrollo Backend",
    slug: "backend",
    description: "Node.js, Express y más",
  },
];

export const allPosts = {
  frontend: [
    {
      id: 1,
      title: "Hooks React",
      slug: "introduccion-nextjs-15",
      excerpt:
        "Permiten que los componentes de la función tengan acceso al estado y otras características de React.",
      date: "Enero 3, 2025",
      image: imgReact,
      tags: ["Hooks", "React"],
      url: "/article/frontend/react/hooks",
    },
    {
      id: 2,
      title: "Cómo implementar autenticación con NextAuth.js",
      slug: "implementar-autenticacion-nextauth",
      excerpt:
        "Aprende a implementar un sistema de autenticación completo en tu aplicación Next.js utilizando NextAuth.js.",
      date: "Mayo 3, 2024",
      image: imgReact,
      tags: ["Autenticación", "Next.js"],
      url: "",
    },
    {
      id: 3,
      title: "Introducción a TypeScript para desarrolladores JavaScript",
      slug: "introduccion-typescript-desarrolladores-javascript",
      excerpt:
        "Una guía completa para desarrolladores JavaScript que quieren aprender TypeScript y mejorar la calidad de su código.",
      date: "Mayo 1, 2024",
      image: imgReact,
      tags: ["TypeScript", "JavaScript"],
      url: "",
    },
    {
      id: 4,
      title: "Optimización de rendimiento en aplicaciones React",
      slug: "optimizacion-rendimiento-react",
      excerpt:
        "Aprende técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React y ofrecer una mejor experiencia de usuario.",
      date: "Abril 28, 2024",
      image: imgReact,
      tags: ["React", "Rendimiento"],
      url: "",
    },
  ],
  movil: [
    {
      id: 1,
      title: "React Native: Una Guía Completa para Desarrolladores",
      slug: "react-native-guía-completa-desarrolladores",
      excerpt:
        "Aprende a crear aplicaciones móviles nativas con React Native, incluyendo componentes de diseño, navegación, integración con Firebase y más.",
      date: "Mayo 1, 2024",
      image: imgReact,
      tags: ["React Native", "Desarrollo Móvil"],
      url: "",
    },
  ],
};
