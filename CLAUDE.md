# CLAUDE.md

## Project Summary

SaaS Starter is an open-source SvelteKit boilerplate for building SaaS products. It provides user authentication, subscription billing, a marketing site, blog engine, admin dashboard, email system, and site search out of the box. Demo: https://saasstarter.work

## Tech Stack

- **Framework:** SvelteKit 2 with Svelte 5 (runes mode)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Component library:** shadcn-svelte v1.2.3 "nova" style (components in `src/lib/components/ui/`, built on bits-ui + tailwind-variants)
- **Authentication:** Supabase Auth (with `@supabase/auth-ui-svelte` for login forms)
- **Database:** Supabase Postgres
- **Payments:** Stripe (Checkout + Portal)
- **Email:** Resend (with Handlebars templates)
- **Search:** Fuse.js (client-side, index built at deploy time)
- **Testing:** Vitest
- **Linting:** ESLint + eslint-plugin-svelte + Prettier

## Folder Structure

```
src/
  app.css              # Global styles, shadcn CSS variables, theme
  app.html             # HTML shell
  config.ts            # Site name, base URL, description
  ambient.d.ts         # Global TypeScript types (FormAccountUpdateResult)
  hooks.server.ts      # SvelteKit server hooks (Supabase session)
  DatabaseDefinitions.ts # Supabase generated DB types
  lib/
    utils.ts           # cn() class merge helper + WithElementRef type
    mailer.ts          # Email sending (admin + user + templated)
    build_index.ts     # Search index builder (runs at build time)
    load_helpers.ts    # Shared SvelteKit load function helpers
    components/ui/     # shadcn-svelte components (Button, Card, Input, Alert, Badge, Label, Separator)
    emails/            # Handlebars email templates
  routes/
    +layout.svelte     # Root layout (loading bar)
    +error.svelte      # Error page
    (marketing)/       # Public pages (prerendered)
      +layout.svelte   # Navbar + footer
      +page.svelte     # Homepage
      blog/            # Blog engine with RSS
      pricing/         # Pricing page + pricing module
      login/           # Auth pages (sign in, sign up, forgot password)
      search/          # Client-side site search
      contact_us/      # Contact form
      auth/            # OAuth callback handler
      sitemap.xml/     # Auto-generated sitemap
    (admin)/           # Authenticated pages
      account/
        +layout.svelte # Auth guard + Supabase client setup
        (menu)/        # Sidebar layout
          +layout.svelte    # Admin sidebar navigation
          +page.svelte      # Dashboard (placeholder)
          billing/          # Subscription management
          settings/         # Profile, email, password, delete account
        api/           # Form actions (updateProfile, updatePassword, etc.)
        create_profile/# Onboarding flow
        subscribe/     # Stripe Checkout redirect
        select_plan/   # Plan selection
```

## Coding Conventions

- **Language:** TypeScript everywhere. Use `lang="ts"` on all `<script>` tags.
- **Svelte 5 runes:** Use `$state()`, `$derived()`, `$effect()`, `$props()`. Never use Svelte 4 stores or `$:` reactive statements.
- **Props:** Destructure with `$props()`. For page data, use `$derived(data.x)` instead of `let { x } = data` to preserve reactivity.
- **Formatting:** Prettier with `prettier-plugin-svelte`. Run `npm run format` before committing.
- **Linting:** ESLint with `eslint-plugin-svelte`. Run `npm run lint` to check.
- **Error handling:** Server-side errors use SvelteKit's `fail()` for form actions and `error()` for load functions. Never return sensitive data (passwords, tokens) in responses.
- **Logging:** Use `console.error()` for errors, `console.log()` for informational messages. Errors are logged server-side only.
- **Naming:** snake_case for file names and database columns. camelCase for TypeScript variables and functions. PascalCase for Svelte components and TypeScript types.
- **Imports:** Use `$lib/` alias for library code. Use relative paths within route groups. Import shadcn components from their `index.js` barrel files.
- **Styling:** Use Tailwind utility classes. For button-styled links, use `buttonVariants()` from the Button component. Theme colors are CSS variables in `app.css`.
- **Forms:** Use SvelteKit form actions with `use:enhance` for progressive enhancement.
- **Security:** Validate all user input server-side. Use `?.toString() ?? ""` for FormData extraction. Validate IDs against whitelists before passing to external APIs.

## Behavior Guidelines

- **Ask before big refactors.** If a change touches more than 5 files or changes architecture, discuss first.
- **Run the full check suite** before committing: `npm run format_check && npm run lint && npm run check && npm run test_run`
- **Don't add unnecessary dependencies.** Check if Tailwind utilities or existing components can solve the problem first.
- **Preserve the existing color scheme** (dark purple primary, lavender secondary, pink highlight) unless explicitly asked to change it.
- **Keep marketing pages prerendered.** If adding dynamic content, set `prerender = false` in the page's `+page.ts` and document why.
- **Don't modify `DatabaseDefinitions.ts` manually** -- it's generated from Supabase.
- **Environment variables** are not committed. Use `.env.local` locally, copy from `.env.example`.
