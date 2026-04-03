import { initAuth } from "@dwete/auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";
import { expo } from "@better-auth/expo";

export const auth = initAuth({

// expo plugin for better-auth
});