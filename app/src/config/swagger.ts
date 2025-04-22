import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de Usuarios - Prueba Técnica Simplest",
    version: "1.0.0",
    description: "Documentación de la API de manejo de usuarios",
  },
  servers: [
    {
      url: "http://localhost:3500",
      description: "Servidor local",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: `Ingresa el token JWT aquí. Ejemplo: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlbGlwZUBnbWFpbC5jb20iLCJuYW1lIjoiRmVsaXBlIiwiaWQiOjMsImlhdCI6MTc0NTI4NzQ4MSwiZXhwIjoxNzQ1MzczODgxfQ.4xWAb6JkaX-r1hKM_eqX96xZ9ofwbIuJ8hKP48MDFHM`,
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["**/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
