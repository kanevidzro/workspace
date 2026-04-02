# AGENTS.md

## Scope
These instructions apply to the entire repository.

## Project Basics
- Monorepo layout uses `apps/`, `server/`, `packages/`, and `tooling/`.
- Runtime/package manager is **Bun**.
- Use **Biome** for linting and formatting.

## Architecture Rules
1. Put business logic in `packages/core`.
2. Keep transport/interface logic in `packages/api` and `server/api`.
3. Keep DB schema/client concerns in `packages/db`.
4. Keep web shared UI in `packages/ui` and mobile UI in `apps/mobile`.

## Development Commands
- Install: `bun install`
- Generate DB client: `bun run db:generate`
- Dev: `bun dev`
- Lint: `bun run lint`
- Format: `bun run format`

## Contribution Expectations
- Keep changes focused and minimal.
- Follow strict typing and avoid `any` when possible.
- Update docs when architectural behavior or conventions change.
