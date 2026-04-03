import { initAuth } from "@dwete/auth";

export const auth = initAuth({
  baseUrl: "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET,
});
