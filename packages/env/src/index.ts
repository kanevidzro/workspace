import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

const fallbackDatabaseUrl =
  "postgresql://postgres:postgres@127.0.0.1:5432/postgres?schema=public";
const fallbackAuthSecret = "dev-only-secret-dev-only-secret-32";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    DATABASE_URL: z.url().default(fallbackDatabaseUrl),
    BETTER_AUTH_SECRET: z.string().min(32).default(fallbackAuthSecret),
    AUTH_SECRET: z.string().min(32).optional(),
    VERCEL_ENV: z.enum(["production", "preview", "development"]).optional(),
    VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
    VERCEL_URL: z.string().optional(),
  },

  clientPrefix: "NEXT_PUBLIC_",

  client: {
    NEXT_PUBLIC_BASE_URL: z.url().default("http://localhost:3000"),
  },

  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
