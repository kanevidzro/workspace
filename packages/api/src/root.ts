import { systemRouter } from "./routers/system";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  system: systemRouter,
//   auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
