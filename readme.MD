<div  align="center">

<br  />

<br/>

Endpoint para probar: [http://localhost:3500](http://localhost:3500)

<div>

<br/>

<img  src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"  alt="typescript"  />
<img  src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933"  alt="node.js"  />
<img  src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logoColor=white&logo=express&color=000000"  alt="express"  />
<img  src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logoColor=white&logo=prisma&color=2D3748"  alt="prisma"  />
<img  src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1"  alt="postgresql"  />

</div>

<h2  align="center">Gestión de usuarios</h2>

<div  align="center">

En esta aplicacion podrás hacer la gestion de usuarios con endpoints como registrar, login, actualizar, listar, y eliminar.

</div>

</div>

## 📋 <a  name="table">Tabla de contenido</a>

1.⁠ ⁠ [Tecnologias](#tech-stack)
2.⁠ ⁠ [Comenzar con la aplicacion en entorno local](#quick-start) 3. [Fuentes externas que se usaron para la construccion del proyecto](#font-extern)

## <a  name="tech-stack">⚙ Tecnologias</a>

[![My Skills](https://skillicons.dev/icons?i=nodejs,typescript,express,prisma,postgresql)](https://skillicons.dev)<br/>

## <a  name="quick-start">🤸 Comenzar con la aplicacion en entorno local</a>

Sigue los siguientes pasos para correr el proyecto en tu local.

Prerequisitos

Asegurate de tener los siguientes paquetes instalados en tu maquina local:

•⁠ ⁠[Git](https://git-scm.com/)

•⁠ ⁠[Node.js](https://nodejs.org/en)

•⁠ ⁠[npm](https://www.npmjs.com/) (Node Package Manager)

Clona el repositorio

```bash

	git clone  https://github.com/FelipeCalderon17/simplest.git

```

_Asignar BD al proyecto_

Para base de datos se uso prisma con neon y postgres por la compatibilidad que tiene postgres con prisma y la facilidad de migración a cualquier otro tipo de base de datos SQL.

```bash
DATABASE_URL= # "postgresql://user:password@domain/nameBD?sslmode=require"
JWT_SECRET= # YOUR SECRET KEY
PORT = # ASSIGN PORT
```

_instalacion_

Instala las dependencias del proyecto con npm:

```bash

	npm install

```

Internamente tambien se ejecuta el siguiente comando

```bash

	npx prisma generate

```

Por lo cual despues de hacer la instalación podemos correr

```bash

	npm run dev

```

Y el proyecto deberia ejecutarse correctamente sin problemas.

⁠

Con la URL [http://localhost:3500](http://localhost:3500) ya puedes hacer las peticiones en postman.

## Script SQL

- para encontrar el script sql simplemente nos dirigimos a la carpeta de migraciones de prisma
- para generar la migracion de la base de datos, simplemente ejecutamos el siguiente comando:

```bash
	npx prisma migrate dev --name nombre_de_la_migracion
```

y nos dirigimos al path de creacion para obtener el script SQL:

```bash
\simplest\prisma\migrations\20250422033401_nombre_de_la_migracion\migration.sql # EXAMPLE
```

## Probar endpoints en postman

1. para probar los enpoitns en postman debemos importar las colecciones de este, entonces importamos el archivo Simples.postman_collection.json y ya tendremos a la mano los enpoints para probar
2. para importar las variables de entorno debe importar el archivo simples.postman_environment.json

## Documentacion Swagger

para acceder a la documentacion de swagger nos dirigimos a la siguiente direccion:
[http://localhost:3500/api-docs](http://localhost:3500/api-docs)

## Usuario de prueba

para lograr probar los enpoints con el usuario de prueba utilizamos el siguiente usuario para el login:

```bash
{
    "email":"paula@gmail.com",
    "password":"simplest2025"
}
```

para probar los enpoints podemos utilizar el token generado por el anterior usuario o ya sea con el siguiente login utilizandolo en los autorization headers:

```bash
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdWxhQGdtYWlsLmNvbSIsIm5hbWUiOiJQYXVsYSBCYXJyaWdhIiwiaWQiOjEsImlhdCI6MTc0NTI5NDE0OSwiZXhwIjoxNzQ1MzgwNTQ5fQ.451ysKVLR4_uRbnXl_o171xtMkyapYX5BVF5a4tOcOM
```
