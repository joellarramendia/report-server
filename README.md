<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en Dev

1. Clonar el repositorio
2. Intalar dependencias `npm install`
3. Clonar `.env.template` y renombrar a `.env`
3. Levantar la base de datos `docker compose up -d`
4. Generar el Prisma client `npx prisma generate`
5. Ejecutar proyecto `npm run start:dev`