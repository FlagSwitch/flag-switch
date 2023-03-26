import { PrismaService } from "../prisma.service";
import { registerMiddlewares as registerSoftDeleteMiddlewares } from "./soft-delete";

export const registerMiddlewares = (prisma: PrismaService) => {
  registerSoftDeleteMiddlewares(prisma);
};
