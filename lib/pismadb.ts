import {PrismaClient } from '@prisma/client';

const Client = global.prismadb || new PrismaClient();
if(process.env.MODE_ENV ==='production') global.prismadb = Client;

export default Client