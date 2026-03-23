# Tasks

## Today

- [ ] Visually QA the shadcn-svelte migration in the browser — check all pages render correctly (homepage, pricing, login, admin dashboard, settings, billing)
- [ ] Verify the admin sidebar works on mobile (toggle open/close, overlay dismissal)
- [ ] Test the Stripe checkout flow still works with the price ID validation
- [ ] Confirm Supabase Auth UI renders and functions correctly with the new HSL color values

## Next

- [ ] Add dark mode support — define `.dark` CSS variables in `app.css`, add a theme toggle component
- [ ] Replace `@supabase/auth-ui-svelte` with a custom auth form built on shadcn-svelte components (removes the Svelte 3 compatibility override)
- [ ] Add more shadcn-svelte components as needed (Sheet for mobile nav, Accordion for FAQ, DropdownMenu for user menu)
- [ ] Upgrade ESLint to flat config (current `.eslintrc.cjs` uses legacy format)
- [ ] Add integration tests for critical flows (sign up, profile creation, subscription)
- [ ] Set up Cloudflare Pages deployment and verify build succeeds

## Backlog

- [ ] Internationalization support (see community extension branch)
- [ ] Add toast/notification system using svelte-sonner for form success/error feedback
- [ ] Implement proper rate limiting on form actions
- [ ] Add GDPR cookie consent banner
- [ ] Consider migrating from Resend to a self-hosted email solution
- [ ] Add OpenGraph images for social media sharing
- [ ] Performance audit — measure Lighthouse scores after migration, compare with DaisyUI baseline
- [ ] Add E2E tests with Playwright
- [ ] Database migration tooling (currently manual SQL, consider Supabase CLI migrations)
