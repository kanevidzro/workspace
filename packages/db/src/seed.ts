import { db } from "./client";

async function main() {
  await db.user.upsert({
    where: { email: "admin@dwete.dev" },
    update: {},
    create: {
      email: "admin@dwete.dev",
      name: "Admin",
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (error) => {
    console.error("Seed failed", error);
    await db.$disconnect();
    process.exit(1);
  });
