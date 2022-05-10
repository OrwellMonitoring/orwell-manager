FROM node:latest AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/dashboard /usr/share/nginx/html
EXPOSE 4200:80