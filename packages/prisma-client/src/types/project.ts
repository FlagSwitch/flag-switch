import { Prisma } from "@prisma/client";

export type ProjectWithRelationsCount = Prisma.ProjectGetPayload<{
  include: {
    _count: true;
  };
}>;
