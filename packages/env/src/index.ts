import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().min(1),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;

export function parseEnv(input: Record<string, string | undefined>) {
  return envSchema.parse(input);
}
