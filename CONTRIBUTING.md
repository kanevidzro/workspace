# 🤝 Contributing

Thanks for your interest in contributing! This project prioritizes **performance**, **type safety**, and a **clean monorepo architecture**.

## 🏗️ Architectural Rules

To keep the codebase maintainable as it scales, follow these rules:

1. **Core-first business logic**
   - All business logic (database writes, calculations, payment processing) belongs in `packages/core`.
   - ❌ Do not write Prisma queries directly in tRPC routers.
   - ❌ Do not place business logic in Next.js Server Actions.
   - ✅ Call services from `@repo/core`.

2. **Strict type safety**
   - Use explicit TypeScript types for functions, variables, and return values.
   - Avoid `any`.
   - Validate external inputs with Zod.

3. **Atomic transactions for financial flows**
   - Wallet/payment logic must use Prisma `$transaction` to preserve integrity.

4. **UI consistency by platform**
   - Web UI components belong in `packages/ui` (shadcn/ui).
   - Mobile UI components belong in `apps/mobile` (NativeWind).

## 🛠️ Development Setup

This repo uses **Bun**. Do not use npm or yarn.

```bash
# 1) Install dependencies
bun install

# 2) Setup environment variables (in relevant app/package)
cp .env.example .env

# 3) Generate Prisma client
bun run db:generate

# 4) Start development
bun dev
```

## 🧹 Code Quality (Biome)

Biome is used for linting and formatting (instead of ESLint/Prettier).

```bash
# Check linting and style issues
bun run lint

# Auto-fix formatting and lint issues
bun run format
```

## 📂 Where Should Code Go?

- **New API endpoint:** implement logic in `packages/core`, then wrap via tRPC in `packages/api`.
- **New database table:** update `packages/db/prisma/schema.prisma`.
- **New web component:** add to `packages/ui`.
- **New background task/job:** add to `server/jobs`.

## 🚀 Branching & Pull Requests

1. Create your branch from `main`.
2. Ensure `bun run build` passes locally.
3. Open a clear PR describing **what changed** and **why**.
