import { expo } from "@better-auth/expo";
import { prisma } from "@dwete/db";
import type { BetterAuthOptions, BetterAuthPlugin } from "better-auth";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export function initAuth<TExtraPlugins extends BetterAuthPlugin[] = []>(options: {
  baseUrl: string;
  secret: string | undefined;
  extraPlugins?: TExtraPlugins;
}) {
  const config = {
    database: prismaAdapter(prisma, {
      provider: "postgresql",
    }),
    baseURL: options.baseUrl,
    secret: options.secret,
    plugins: [expo(), ...(options.extraPlugins ?? [])],
    trustedOrigins: ["expo://"],
    onAPIError: {
      onError(error, ctx) {
        console.error("BETTER AUTH API ERROR", error, ctx);
      },
    },
  } satisfies BetterAuthOptions;

  return betterAuth(config);
}

export type Auth = ReturnType<typeof initAuth<BetterAuthPlugin[]>>;
export type Session = Auth["$Infer"]["Session"];
