# Primero, construimos la aplicación Angular
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

# Luego, desplegamos la aplicación en un servidor web
FROM nginx:1.23.4-alpine
COPY --from=build /app/dist/customer-pwa /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Establecemos la variable de entorno NODE_ENV
ENV NODE_ENV production

# Configuramos el puerto para desarrollo (puerto 4200) y producción (puerto 80)
ARG PORT=80
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]
