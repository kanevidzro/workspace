# 🏗️ Project Architecture

This project is a high-performance, full-stack monorepo managed by **Turborepo** and powered by the **Bun** runtime. The architecture emphasizes strict type safety, modular boundaries, and fast developer workflows.

## 🚀 Stack Overview

- **Runtime:** Bun (runtime + package manager)
- **API Server:** Hono (HTTP layer)
- **API Contract:** tRPC (end-to-end type-safe interfaces)
- **Authentication:** Better-Auth (sessions, auth flows, MFA support)
- **Database:** Prisma + PostgreSQL
- **Styling:** Tailwind CSS v4
- **Linting/Formatting:** Biome

## 📂 Monorepo Layout

### `apps/` — Product Entry Points

- **`web/`**: Next.js (App Router) application.
  - Consumes shared UI from `@repo/ui`.
  - Calls API contracts from `@repo/api`.
- **`mobile/`**: Expo (React Native) app.
  - Uses NativeWind for styling.
  - Shares API contract via `@repo/api`.

### `server/` — Execution Layer

- **`api/`**: Hono-based Bun server.
  - Handles HTTP requests.
  - Hosts webhooks (for example payments/Stripe).
  - Exposes Better-Auth server routes.
- **`jobs/`**: Background workers and schedulers.
  - Queues and async processing.
  - Cron-style tasks.
  - Side effects such as email dispatch/reconciliation jobs.

### `packages/` — Shared Modules

- **`core/`**: Framework-agnostic business logic (**the brain**).
  - Domain services (social, commerce, wallet, etc.).
  - No transport/UI framework coupling.
- **`api/`**: tRPC routers, procedures, and schema contracts.
  - Defines the typed boundary between clients and server logic.
- **`auth/`**: Central Better-Auth configuration and adapters.
  - Shared across web, mobile, and backend entry points.
- **`db/`**: Prisma schema and generated client.
  - Single source of truth for persistence.
- **`ui/`**: Shared shadcn/ui components for web.
  - Uses design tokens and Tailwind v4 conventions.
- **`email/`**: Email templates and sender integrations.
- **`env/`**: Zod-validated environment configuration.
- **`utils/`**: Optional cross-cutting utilities.

### `tooling/` — Developer Experience

- **`biome/`**: Linting and formatting presets.
- **`typescript/`**: Shared TypeScript config presets.

## 🔄 Data & Logic Flow

1. **Request**: A user action starts in `apps/web` or `apps/mobile`.
2. **Transport**: The client calls a tRPC procedure from `packages/api`.
3. **Auth**: Middleware validates session/auth context via `packages/auth`.
4. **Business Logic**: Procedure delegates to domain services in `packages/core`.
5. **Persistence**: `packages/core` reads/writes via `packages/db` (Prisma transactions).
6. **Side Effects**: Long-running work is queued to `server/jobs` and may use `packages/email`.

## 🛠️ Development Workflow

### Prerequisites

- Bun installed
- Docker available (for local PostgreSQL)

### Setup

```bash
bun install
bun run db:generate
bun dev
```

### Standards

- **Linting/Formatting**: Use Biome
  - `bun run lint`
  - `bun run format`
- **Type Safety**: TypeScript strict mode is expected.
- **Architecture Rule**: Shared business logic belongs in `packages/core`.
