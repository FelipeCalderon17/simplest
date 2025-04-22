<div align="center">
  
  <br />

  <br/>
  endpoit para probar:  localhost:3500
  
  <div>
  <br/>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
<img  src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933"  alt="node.js" />
<img  src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logoColor=white&logo=express&color=000000"  alt="express" />
<img  src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logoColor=white&logo=prisma&color=2D3748"  alt="prisma" />
<img  src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1"  alt="postgresql" />
    
  </div>

  <h2 align="center">Gestión de usuarios</h2>

   <div align="center">
     En esta aplicacion podrás hacer la gestion de usuarios con endpoints como registrar, login, actualizar, listar, y eliminar.
    </div>
</div>

## 📋 <a name="table">Tabla de contenido</a>

1.⁠ ⁠⚙ [Tecnologias](#tech-stack)
2.⁠ ⁠🤸 [Comenzar con la aplicacion en entorno local](#quick-start) 3. [Fuentes externas que se usaron para la construccion del proyecto](#font-extern)

## <a name="tech-stack">⚙ Tecnologias</a>

[![My Skills](https://skillicons.dev/icons?i=nodejs,typescript,express,prisma,postgresql)](https://skillicons.dev)<br/>

## <a name="quick-start">🤸 Comenzar con la aplicacion en entorno local</a>

Sigue los siguientes pasos para correr el proyecto en tu local.

Prerequisitos

Asegurate de tener los siguientes paquetes instalados en tu maquina local:

•⁠ ⁠[Git](https://git-scm.com/)
•⁠ ⁠[Node.js](https://nodejs.org/en)
•⁠ ⁠[npm](https://www.npmjs.com/) (Node Package Manager)

Clona el repositorio

```bash
git clone https://github.com/FelipeCalderon17/simplest.git
```

⁠

instalacion

Instala las dependencias del proyecto con npm:

```bash
npm install
```

⁠

Asignar BD al proyecto

Para base de datos se uso prisma con neon y postgres por la compatibilidad que tiene postgres con prisma y la facilidad de migración a cualquier otro tipo de base de datos SQL.

Cuando se ejecuta el comando de instalación

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
Con la URL [http://localhost:3500](http://localhost:3000) ya puedes hacer las peticiones en postman.
