import { Prisma } from "@prisma/client";

export type ForgotWithDashboardUser = Prisma.ForgotGetPayload<{
  include: {
    dashboardUser: true;
  };
}>;
