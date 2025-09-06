### Prompts

## Prompt 1: (usando metaprompting)

Quiero que generes un proyecto full-stack con las siguientes características:

Estructura del Proyecto:

Este proyecto es una aplicación full-stack con:

- **Frontend:** React (Create React App)
- **Backend:** Node.js con Express y TypeScript
- **ORM:** Prisma con SQLite en memoria

---

    backend/: contiene el código del servidor.

    src/: código fuente del backend en TypeScript.

    index.ts: punto de entrada del backend con Express.

    prisma/: contiene el archivo schema.prisma para configurar Prisma ORM.

    tsconfig.json: configuración de TypeScript.

    .env: variables de entorno para la base de datos y configuración.

    frontend/: contiene el código del cliente en React.

    src/: código fuente del frontend.

    public/: archivos estáticos (HTML, imágenes).

    build/: construcción de producción generada por React.

    base de datos en memoria: configurada con SQLite en modo memoria usando Prisma, es decir, en el archivo schema.prisma debe configurarse así:

    datasource db {
    provider = "sqlite"
    url = "file:memory:?cache=shared"
    }

Frontend

    Debe generarse con Create React App.

    Debe incluir un componente principal que consuma un endpoint del backend (ejemplo: listar usuarios o ítems).

Backend

    Debe estar escrito en TypeScript usando Express.

    Debe tener configurado Prisma ORM apuntando a una base de datos SQLite en memoria.

## Prompt 2:

Solve this problem: ERROR Network Error AxiosError: Network Error at XMLHttpRequest.handleError (http://localhost:3000/static/js/bundle.js:40789:14) at Axios.request (http://localhost:3000/static/js/bundle.js:41227:41) at async fetchUsers (http://localhost:3000/static/js/bundle.js:36:17)

## Prompt 3:

Now the frontend and the backend seem to work in the correct port, but the applicaction show an other problem, please tell me what i could be:

7:08:20 PM - Found 0 errors. Watching for file changes. Backend running on http://localhost:4000 /Users/miqueldebonvillagrasa/Documents/EDUCATION/04.CODING/05.IA Master/AI4Devs-lab-ides-RO-1-mdv/backend/node_modules/@prisma/client/runtime/library.js:122 )}var Zi=({clientMethod:e,activeProvider:r})=>t=>{let n="",i;if(Array.isArray(t))...

## Prompt 4:

Now seems to be working everything right, write me a summary markdown file with the needed comand to start the application.
