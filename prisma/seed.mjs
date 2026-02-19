import { PrismaClient } from '@prisma/client';
import { createId as cuid } from '@paralleldrive/cuid2';
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient();


const users = [
    {
        id: cuid(),
        name: "Eva García",
        email: "eva@eva.es",
        password: await bcrypt.hash('eva', 10),
        role: 'USER',
    },
    {
        id: cuid(),
        name: "Juan Pérez",
        email: "juan@juan.es",
        password: await bcrypt.hash('juan', 10),
        role: 'USER',
    },
    {
        id: cuid(),
        name: "Pepe Viyuela",
        email: "pepe@pepe.es",
        password: await bcrypt.hash('pepe', 10),
        role: 'USER',
    },
    {
        id: cuid(),
        name: "Usuario Normal",
        email: "user@user.es",
        password: await bcrypt.hash('user', 10),
        role: 'USER',
    },
    {
        id: cuid(),
        name: "Ana Alferez",
        email: "ana@ana.es",
        password: await bcrypt.hash('ana', 10),
        role: 'ADMIN',
    },
    {
        id: cuid(),
        name: "Jose López",
        email: "jose@jose.es",
        password: await bcrypt.hash('jose', 10),
        role: 'ADMIN',
    },
    {
        id: cuid(),
        name: "Administrador",
        email: "admin@admin.es",
        password: await bcrypt.hash('admin', 10),
        role: 'ADMIN',
    },

];



// Eliminar contenido de las tablas y reiniciar secuencias
const resetDatabase = async () => {
    console.log("Reiniciando base de datos (TRUNCATE)...");
    // PostgreSQL
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;

    // MySQL equivalente (MySQL no soporta TRUNCATE de varias tablas ni CASCADE):
    /*
    await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`;
    await prisma.$executeRaw`TRUNCATE TABLE User;`;
    */
};


const load = async () => {
    try {
        await resetDatabase();

        // Users (CUIDs generados arriba)
        await prisma.user.createMany({ data: users });

        console.log(`Usuarios insertados correctamente`);

    } catch (error) {
        console.error("Error al insertar datos:", error);
    } finally {
        await prisma.$disconnect();
    }
};

load();