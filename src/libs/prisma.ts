//@ts-nocheck
import { PrismaClient } from "@prisma/client";

// Evita instanciar demasiadas instancias de Prisma en desarrollo
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices#problem
let prisma: PrismaClient;

if (!global.prisma) {
    global.prisma = new PrismaClient();
}
prisma = global.prisma;

export default prisma;
