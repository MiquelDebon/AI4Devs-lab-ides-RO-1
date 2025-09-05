# LTI - Sistema de Seguimiento de Talento

Este proyecto es una aplicación full-stack con un frontend en React y un backend en Express usando Prisma como ORM. El frontend se inicia con Create React App y el backend está escrito en TypeScript.

### Prompts

Quiero que generes un proyecto full-stack con las siguientes características:

### Estructura del Proyecto:

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

# Arrancar proyecto

1. Generar Prisma Client y crear tablas

```
npx prisma generate
npx prisma db push
```

2. Arrancar Backend

```
cd backedn
npm install
npm run dev
```

3. Arrancar Backend

```
cd frontend
npm install
npm start
```

---

## Explicación de Directorios y Archivos

- `backend/`: Contiene el código del lado del servidor escrito en Node.js.
  - `src/`: Contiene el código fuente para el backend.
    - `index.ts`: El punto de entrada para el servidor backend.
  - `prisma/`: Contiene el archivo de esquema de Prisma para ORM.
  - `tsconfig.json`: Archivo de configuración de TypeScript.
  - `.env`: Contiene las variables de entorno.
- `frontend/`: Contiene el código del lado del cliente escrito en React.
  - `src/`: Contiene el código fuente para el frontend.
  - `public/`: Contiene archivos estáticos como el archivo HTML e imágenes.
  - `build/`: Contiene la construcción lista para producción del frontend.
- `docker-compose.yml`: Contiene la configuración de Docker Compose para gestionar los servicios de tu aplicación.
- `README.md`: Este archivo contiene información sobre el proyecto e instrucciones sobre cómo ejecutarlo.

## Estructura del Proyecto

El proyecto está dividido en dos directorios principales: `frontend` y `backend`.

### Frontend

El frontend es una aplicación React y sus archivos principales están ubicados en el directorio `src`. El directorio `public` contiene activos estáticos y el directorio `build` contiene la construcción de producción de la aplicación.

### Backend

El backend es una aplicación Express escrita en TypeScript.

- El directorio `src` contiene el código fuente
- El directorio `prisma` contiene el esquema de Prisma.

## Primeros Pasos

Para comenzar con este proyecto, sigue estos pasos:

1. Clona el repositorio.
2. Instala las dependencias para el frontend y el backend:

```sh
cd frontend
npm install

cd ../backend
npm install
```

3. Construye el servidor backend:

```
cd backend
npm run build
```

4. Inicia el servidor backend:

```
cd backend
npm run dev
```

5. En una nueva ventana de terminal, construye el servidor frontend:

```
cd frontend
npm run build
```

6. Inicia el servidor frontend:

```
cd frontend
npm start
```

El servidor backend estará corriendo en http://localhost:3010 y el frontend estará disponible en http://localhost:3000.

## Docker y PostgreSQL

Este proyecto usa Docker para ejecutar una base de datos PostgreSQL. Así es cómo ponerlo en marcha:

Instala Docker en tu máquina si aún no lo has hecho. Puedes descargarlo desde aquí.
Navega al directorio raíz del proyecto en tu terminal.
Ejecuta el siguiente comando para iniciar el contenedor Docker:

```
docker-compose up -d
```

Esto iniciará una base de datos PostgreSQL en un contenedor Docker. La bandera -d corre el contenedor en modo separado, lo que significa que se ejecuta en segundo plano.

Para acceder a la base de datos PostgreSQL, puedes usar cualquier cliente PostgreSQL con los siguientes detalles de conexión:

- Host: localhost
- Port: 5432
- User: postgres
- Password: password
- Database: mydatabase

Por favor, reemplaza User, Password y Database con el usuario, la contraseña y el nombre de la base de datos reales especificados en tu archivo .env.

Para detener el contenedor Docker, ejecuta el siguiente comando:

```
docker-compose down
```
