import { Stack } from "expo-router";
import { authClient } from "@/auth/client";
import { TRPCReactProvider } from "@/trpc/react";

export default function RootLayout() {
  const { data: session } = authClient.useSession();
  const isAuthenticated = !!session;

  return (
    <TRPCReactProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(main)" />
        </Stack.Protected>
        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
      </Stack>
    </TRPCReactProvider>
  );
}
