# Deployment Stabilisation

Before making any changes, read and understand every document inside `/docs`.

This task is **not** about adding features.

The objective is to make the project production-ready and deployable.

Follow every existing project protocol and update `/docs/progress.md` when complete.

---

## Objective

Audit the entire project and resolve every issue currently preventing a successful production deployment.

The project should successfully:

- Build locally
- Pass TypeScript checks
- Pass ESLint
- Generate the Prisma Client
- Connect correctly to the database
- Deploy successfully to Vercel

Do not ignore warnings that could become deployment errors.

---

## Prisma

Fully audit the Prisma setup.

Verify:

- Prisma schema validity
- Generated Prisma Client
- Database connection
- Environment variable usage
- Migration history
- Production compatibility

If the client is missing, regenerate it.

If migrations are inconsistent, resolve them without losing existing data.

Ensure the project follows Prisma best practices for Next.js App Router.

---

## Environment Variables

Audit every required environment variable.

Verify:

- `.env.local`
- `.env.example`
- Vercel Environment Variables

Every required variable should be documented.

No secrets should be hardcoded.

Missing variables should produce meaningful errors rather than application crashes.

---

## Production Build

Run a complete production audit.

Resolve every issue produced by:

```bash
pnpm run build
```

Including but not limited to:

- TypeScript errors
- ESLint errors
- Server Component issues
- Client Component boundaries
- Suspense issues
- Dynamic rendering errors
- Metadata warnings
- Route conflicts

The project must build without errors.

---

## Dependency Audit

Inspect every dependency.

Remove:

- unused packages
- duplicate packages
- deprecated packages

Ensure production dependencies are correctly separated from development dependencies.

Verify package versions are compatible with one another.

---

## Next.js Audit

Verify:

- App Router structure
- Layout hierarchy
- Metadata implementation
- Static assets
- Image optimisation
- Route configuration

Ensure everything follows current Next.js best practices.

---

## Performance Audit

Check for obvious issues that may affect deployment or runtime.

Examples:

- unnecessary client components
- duplicated renders
- oversized bundles
- avoidable hydration issues

Only fix issues that improve production stability.

Do not perform unnecessary refactors.

---

## Code Quality

Verify:

- no unused imports
- no unused variables
- no dead code
- no duplicated logic
- no obvious anti-patterns

Only make safe improvements.

---

## Deployment

The project should be deployable to Vercel immediately after this task.

Confirm:

- successful production build
- successful Prisma generation
- successful deployment readiness

Do not add new features.

Do not redesign any UI.

Do not change application behaviour unless required to fix deployment.

---

## Completion Checklist

Before marking this task complete, verify:

- ✅ `pnpm install` completes successfully
- ✅ Prisma Client generates successfully
- ✅ `pnpm run lint` passes
- ✅ `pnpm run typecheck` passes (or `tsc --noEmit`)
- ✅ `pnpm run build` completes successfully
- ✅ Project is ready for Vercel deployment
- ✅ Existing functionality remains intact

Finally, update `/docs/progress.md` with every issue found, every fix applied, and the current deployment status.