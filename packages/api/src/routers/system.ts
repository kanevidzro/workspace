import { buildSystemStatus } from "@dwete/core";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const systemRouter = createTRPCRouter({
  status: publicProcedure.query(() => buildSystemStatus({ serviceName: "api" })),
});
