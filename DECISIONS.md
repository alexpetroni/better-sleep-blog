# Decisions

## 2026-03-23 — Upgraded Supabase packages and modernized auth

Upgraded `@supabase/ssr` from ^0.5.2 to ^0.9.0 and `@supabase/supabase-js` from ^2.45.2 to ^2.99.3. Renamed environment variables to follow Supabase's new API key naming: `PUBLIC_SUPABASE_ANON_KEY` → `PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `PRIVATE_SUPABASE_SERVICE_ROLE` → `PRIVATE_SUPABASE_SERVICE_ROLE_KEY`. Replaced `getUser()` with `getClaims()` in `safeGetSession` for faster JWT validation (local JWKS check, no network call). Removed the `suppressGetSessionWarning` hack from hooks and load_helpers. Removed the `@supabase/ssr` cookie override from package.json (no longer needed in 0.8+).

## 2026-03-23 — Updated shadcn-svelte components to "nova" style

Regenerated all shadcn-svelte components from the registry using CLI v1.2.3 "nova" style. Updated `components.json` with `registry` URL, `lib` alias, and `nova` style. Added `WithElementRef` type to `utils.ts` (used by all new components for bindable `ref` props). New components gained `href` support on Button, bindable `ref`/`value`/`files` on Input, `data-slot` attributes, and new sub-components (`card-action`, `alert-action`). Preserved custom `success` and `warning` Alert variants not in upstream registry.

## 2026-03-23 — Migrated from DaisyUI to shadcn-svelte

Replaced DaisyUI v5 component library with manually created shadcn-svelte components (Button, Card, Input, Alert, Badge, Label, Separator) built on bits-ui and tailwind-variants. DaisyUI's opinionated styling was difficult to customize beyond its theme system, and shadcn-svelte gives full control over component markup and styling while staying consistent with the broader shadcn ecosystem. The tradeoff is more code to maintain, but each component is simple and fully owned.

## 2026-03-23 — Switched from PostCSS to @tailwindcss/vite plugin

Tailwind CSS v4 recommends the Vite plugin over PostCSS for better performance and simpler config. Deleted `postcss.config.js` and added `@tailwindcss/vite` to `vite.config.ts`. All Tailwind configuration now lives in `src/app.css` using `@theme inline` — no separate `tailwind.config` file.

## 2026-03-23 — Preserved brand colors via CSS custom properties

Mapped the original DaisyUI theme colors to shadcn's CSS variable system: primary (#180042 dark purple), secondary (#c7b9f8 lavender), and a custom `--highlight` (#db2777 pink) for gradients. Chose not to use shadcn's default gray palette to maintain the existing warm visual identity (off-white background, beige muted tones).

## 2026-03-23 — Used $derived() for SvelteKit page data destructuring

Svelte 5's linter flags `let { x } = data` after `let { data } = $props()` because it captures only the initial value. Fixed by using `$derived(data.x)` in all page components rather than suppressing the warning globally. This is more correct and will track any future reactivity in page data.

## 2026-03-23 — Scoped ESLint warning suppression to UI components only

shadcn-svelte components inherently use `...restProps` for HTML attribute forwarding, which triggers `custom_element_props_identifier`. Rather than suppressing this project-wide, limited `ignoreWarnings: true` to `src/lib/components/ui/**/*.svelte` only. All other Svelte files get full lint enforcement.

## 2026-03-23 — Validated Stripe price IDs against whitelist

Added server-side validation of the `[slug]` parameter in the subscribe route against known `stripe_price_id` values from `pricing_plans.ts`. Previously, any authenticated user could craft a URL to checkout with arbitrary price IDs on the Stripe account. Chose a static whitelist over a Stripe API call for simplicity and zero latency.

## 2026-03-23 — Removed passwords from all form action responses

The `updatePassword` action was returning plaintext passwords in both success and error responses, which got serialized to the browser. Replaced all password values with empty strings in error responses and `{ success: true }` for the success case. Error fields are still returned for form validation highlighting.

## 2026-03-23 — Cached Supabase service-role client as lazy singleton

`sendUserEmail()` was creating a new `createClient()` instance on every call. Extracted to a module-level `getServiceRoleClient()` that initializes once and reuses. Safe because the service-role client is stateless and the credentials don't change at runtime.
