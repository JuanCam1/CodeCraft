import imgReact from "../assets/images/hooks.webp";

export const allPosts = {
  frontend: [
    {
      id: 1,
      title: "Introducción a Next.js 15: Nuevas características y mejoras",
      slug: "introduccion-nextjs-15",
      excerpt:
        "Descubre las nuevas características y mejoras que trae Next.js 15, incluyendo mejoras en el App Router, Server Components y más.",
      date: "Mayo 5, 2024",
      image: imgReact,
      tags: ["Next.js", "React"],
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
    },
    {
      id: 5,
      title: "Introducción a Tailwind CSS: Diseño rápido y eficiente",
      slug: "introduccion-tailwind-css",
      excerpt:
        "Descubre cómo Tailwind CSS puede ayudarte a diseñar interfaces de usuario de forma rápida y eficiente sin escribir CSS personalizado.",
      date: "Abril 25, 2024",
      image: imgReact,
      tags: ["CSS", "Tailwind"],
    },
    {
      id: 6,
      title: "Creando APIs RESTful con Node.js y Express",
      slug: "apis-restful-nodejs-express",
      excerpt:
        "Aprende a crear APIs RESTful robustas y escalables utilizando Node.js y Express para tus aplicaciones web.",
      date: "Abril 22, 2024",
      image: imgReact,
      tags: ["Node.js", "Express", "API"],
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
    },
  ],
};
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
