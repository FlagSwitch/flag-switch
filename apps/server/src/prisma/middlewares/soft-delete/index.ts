import { PrismaClient } from "prisma-client"
import preventDeleteMiddleware from ".//prevent-delete.middleware";
import preventReadDeletedMiddleware from ".//prevent-read-deleted.middleware";
import preventUpdateDeletedMiddleware from "./prevent-update-deleted.middleware";

export const registerMiddlewares = (prisma: PrismaClient) => {
    preventDeleteMiddleware(prisma);
    preventReadDeletedMiddleware(prisma);
    preventUpdateDeletedMiddleware(prisma)
}

 