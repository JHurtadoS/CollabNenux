# Etapa 1: Compilar la aplicación Angular
FROM node:14-alpine AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias de la aplicación
RUN npm install

# Copiar todo el código de la aplicación al contenedor
COPY . .

# Compilar la aplicación Angular
RUN npm run build --prod

# Etapa 2: Configurar un servidor NGINX para servir la aplicación Angular
FROM nginx:alpine

# Copiar los archivos compilados de la aplicación desde la etapa anterior
COPY --from=build /app/dist/tu-nombre-aplicacion-angular /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
