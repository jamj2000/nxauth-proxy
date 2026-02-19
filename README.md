# Aplicación de ejemplo con Next-Auth 5

## Referencias 

- https://medium.com/@uriser/authentication-in-next-js-with-auth-js-nextauth-5-b74e3ae18ab8
- https://github.com/uriseroussi/next-nextauthjs-example
- https://www.youtube.com/watch?v=1MTyCvS05V4
- https://github.com/AntonioErdeljac/next-auth-v5-advanced-guide
- https://www.youtube.com/watch?v=VrBLfXfXfoY
- https://authjs.dev/

## Pasos en el desarrollo de la aplicación

### Iniciar proyecto

```sh
npx  create-next-app  nxauth5
npm  install  next-auth@beta
```

### Instalar soporte de Base Datos

```sh
npm install prisma@6 -D
npm install @prisma/client@6

npx prisma init  # para crear archivo prisma/schema.prisma
```

Creamos archivo `lib/prisma.js`

```js
import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

export default prisma
```

Editamos archivo `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url  	    = env("DATABASE_URL")
}

model User {
  id String  @id @default(cuid())
  name String
// ...
}

// ...
```

Ejecutamos

```sh
npx  prisma  generate   # para generar cliente de prisma
npx  prisma  db  push   # para realizar migración (crear tabla)
```

### Preparar Base Datos 

1. Damos de alta una base de datos Postgres en [neon.tech](https://neon.tech).
2. Anotamos datos de conexión, disponibles en `Dashboard` -> `Connection Details` -> `Prisma`
  - schema.prisma
  - .env


### Instalar adaptador para Prisma

```sh
npm install @auth/prisma-adapter
```

### Definir modelos para sistema de autenticación

Seguir la siguiente documentación: 
- https://authjs.dev/reference/adapter/prisma

Solo definimos los modelos `User` y `Account`

En el modelo `User` insertamos campo de password:

```prisma
model User {
    ...
    password  String?
    ...
}
```
Lo declaramos como opcional puesto que los proveedores OAuth no lo usan.

Y ejecutamos:

```sh
npx  prisma  generate
npx  prisma  db  push
```

### Hacer sistema de registro

```sh
npm  install  bcryptjs   # para cifrar contraseñas
```


### Hacer uso de la semilla

```sh
npm  install  @paralleldrive/cuid2   # instalar paquete para cuid
npm  run  seed                       # realizar sembrado
```

