# Architecture

## High-Level Components

```
┌─────────────────────────────────────────────────┐
│                   Browser                        │
├──────────────────┬──────────────────────────────┤
│  Marketing Site  │       Admin Dashboard         │
│  (prerendered)   │    (server-rendered + CSR)    │
├──────────────────┴──────────────────────────────┤
│              SvelteKit Server                     │
│  ┌──────────┐  ┌───────────┐  ┌──────────────┐  │
│  │  Hooks   │  │ Form      │  │  Load        │  │
│  │ (auth)   │  │ Actions   │  │  Functions   │  │
│  └────┬─────┘  └─────┬─────┘  └──────┬───────┘  │
├───────┼──────────────┼────────────────┼──────────┤
│       ▼              ▼                ▼          │
│  ┌─────────┐   ┌──────────┐   ┌────────────┐   │
│  │Supabase │   │  Stripe  │   │   Resend   │   │
│  │Auth + DB│   │ Payments │   │   Emails   │   │
│  └─────────┘   └──────────┘   └────────────┘   │
└─────────────────────────────────────────────────┘
```

## Data Flow

### Authentication

1. User visits `/login` → Supabase Auth UI renders sign-in form
2. On sign-in, Supabase returns session → `hooks.server.ts` attaches `supabase` client and `safeGetSession()` to `event.locals` (uses `getClaims()` for fast local JWT validation)
3. Admin layout's `+layout.server.ts` checks session → redirects to `/login` if unauthenticated
4. OAuth callback handled at `/auth/callback` → exchanges code for session

### Subscription Billing

1. User selects plan on `/pricing` → navigates to `/account/subscribe/[price_id]`
2. Server validates `price_id` against `pricing_plans.ts` whitelist
3. Gets or creates Stripe customer ID (stored in Supabase `stripe_customers` table)
4. Creates Stripe Checkout session → redirects user to Stripe
5. On return, user lands on `/account` → subscription status fetched from Stripe API
6. Billing portal at `/account/billing/manage` redirects to Stripe's self-serve portal

### Form Actions (Profile, Password, Email)

1. Forms use SvelteKit `use:enhance` for progressive enhancement
2. Actions in `/account/api/+page.server.ts` handle all account mutations
3. Validation runs server-side → returns `fail(400, { errorMessage, errorFields })` on error
4. Success returns minimal data (no sensitive fields)

### Email

1. `sendAdminEmail()` — sends notifications to admin (new signups, etc.)
2. `sendUserEmail()` — sends to users after checking: email exists, email verified, not unsubscribed
3. Both use Resend API with Handlebars templates from `src/lib/emails/`
4. Service-role Supabase client is cached as a lazy singleton

### Search

1. At build time, `build_index.ts` crawls prerendered pages → creates Fuse.js index
2. Index served as static JSON at `/search/api.json`
3. Client loads index on mount → searches run entirely client-side

## Key Entities

- **User** — Supabase Auth user (email, OAuth providers, AMR)
- **Profile** — `profiles` table (full_name, company_name, website, unsubscribed)
- **Stripe Customer** — `stripe_customers` table (maps user ID → Stripe customer ID)
- **Subscription** — Fetched live from Stripe API (not stored in DB)
- **Pricing Plan** — Static config in `pricing_plans.ts` (name, price, stripe_price_id)

## External Services

| Service      | Purpose                         | Auth Method                                                                                                      |
| ------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Supabase** | Auth, Postgres DB               | `PUBLIC_SUPABASE_URL` + `PUBLIC_SUPABASE_PUBLISHABLE_KEY` (client), `PRIVATE_SUPABASE_SERVICE_ROLE_KEY` (server) |
| **Stripe**   | Subscriptions, Checkout, Portal | `PRIVATE_STRIPE_API_KEY`                                                                                         |
| **Resend**   | Transactional email             | `PRIVATE_RESEND_API_KEY` (optional)                                                                              |

## Known Constraints

- **Prerendering:** Marketing pages, pricing, and blog are prerendered as static HTML. Adding dynamic server-side content to these requires disabling prerender.
- **Single subscription:** The billing system assumes one active subscription per user. Multiple concurrent subscriptions are not supported.
- **Free plan:** The free plan has no Stripe price ID. It's handled entirely in-app logic, not through Stripe.
- **Email rate limits:** Supabase dev tier limits to 4 auth emails/hour. Production needs custom SMTP.
- **Supabase Auth UI:** Uses `@supabase/auth-ui-svelte` which targets Svelte 3/4. Works via a `svelte` override in `package.json`.
- **Search index:** Only prerendered pages are indexed. Dynamic/authenticated content is not searchable.
