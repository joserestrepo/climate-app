# Usar una imagen de Node.js como base
FROM node:18.19.1-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copiar el archivo package.json y package-lock.json (o yarn.lock si estás usando Yarn) al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Compilar la aplicación
RUN npm run build

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]