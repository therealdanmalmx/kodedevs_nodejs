import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare global {
    var _db: PrismaClient | undefined;
}

if (!global._db) {
    global._db = new PrismaClient();
 }

prisma = global._db;


export default prisma ;
