# Climate App

Esta es una aplicación web desarrollada con Next.js que proporciona información climática utilizando la API de OpenWeatherMap.

## Prerrequisitos

Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo aquí.

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/joserestrepo/climate-app.git
cd climate-app
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

### Paso 3: Ejecutar en Modo de Desarrollo

```bash
npm run dev
```

Este comando iniciará el servidor de desarrollo Nextjs y abrirá la aplicación en tu navegador predeterminado. Puedes acceder a la aplicación en http://localhost:3000.

## Levantar con Docker

Si prefieres levantar la aplicación utilizando Docker, asegúrate de tener Docker instalado en tu sistema y luego ejecuta los siguientes comandos:

### Paso 1: Construye la imagen Docker

```bash
docker build -t climate-app .
```

### Paso 2: Ejecuta el contenedor

```bash
docker run -p 3000:3000 climate-app
```

La aplicación estará disponible en http://localhost:3000.

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

- 'npm run dev': Inicia el servidor de desarrollo de Next.js.
- 'npm run build': Construye la aplicación para producción.
- 'npm start': Inicia la aplicación en un entorno de producción.
- 'npm run lint': Ejecuta ESLint para lintear los archivos del proyecto.
- 'npm test': Ejecuta las pruebas unitarias.
- 'npm run test:watch': Ejecuta las pruebas unitarias en modo observador.

## Versiones de las Dependencias

A continuación, se detallan las versiones de las principales dependencias utilizadas en el proyecto:

- Node.js: 18.19.1
- npm: 10.2.4
- TypeScript: ^5
- React: ^18
- Tailwind CSS: ^3.3.0
