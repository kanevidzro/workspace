import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    DATABASE_URL: z.url(),
    BETTER_AUTH_SECRET: z.string().min(32),
  },

  clientPrefix: "PUBLIC_",

  client: {
    NEXT_PUBLIC_BASE_URL: z.string().min(1),
  },

  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
