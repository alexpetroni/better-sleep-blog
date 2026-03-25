<script lang="ts">
  import { WebsiteName } from "./../../config"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  let mobileMenuOpen = $state(false)

  const NAV_LINKS = [
    { href: "/blog", label: "Articole" },
    { href: "/contact_us", label: "Contact" },
    { href: "/search", label: "Căutare" },
  ]

  const FOOTER_NAV = [
    { href: "/", label: "Acasă" },
    { href: "/blog", label: "Articole" },
    { href: "/contact_us", label: "Contact" },
    { href: "/search", label: "Căutare" },
  ]
</script>

<!-- Header -->
<header class="sticky top-0 z-40 bg-background/80 backdrop-blur-md">
  <div class="max-w-5xl mx-auto px-6">
    <div class="flex items-center justify-between h-16">
      <a
        href="/"
        class="font-heading text-xl tracking-tight text-foreground hover:text-primary transition-colors"
        style="font-family: var(--font-heading);"
      >
        {WebsiteName}
      </a>

      <!-- Desktop nav -->
      <nav class="hidden sm:flex items-center gap-8">
        {#each NAV_LINKS as link}
          <a
            href={link.href}
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <!-- Mobile toggle -->
      <button
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
        class="sm:hidden inline-flex items-center justify-center rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Meniu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          {#if mobileMenuOpen}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          {:else}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    {#if mobileMenuOpen}
      <nav class="sm:hidden pb-4 border-t border-border/50">
        <div class="flex flex-col pt-3 gap-1">
          {#each NAV_LINKS as link}
            <a
              href={link.href}
              class="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onclick={() => (mobileMenuOpen = false)}
            >
              {link.label}
            </a>
          {/each}
        </div>
      </nav>
    {/if}
  </div>
  <div class="border-b border-border/40"></div>
</header>

<!-- Main content -->
<main>
  {@render children?.()}
</main>

<!-- Spacer pushes footer to bottom -->
<div class="grow"></div>

<!-- Footer -->
<footer class="border-t border-border/40 mt-20">
  <div class="max-w-5xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Brand -->
      <div class="md:col-span-1">
        <div
          class="text-lg tracking-tight mb-3"
          style="font-family: var(--font-heading);"
        >
          {WebsiteName}
        </div>
        <p class="text-sm text-muted-foreground leading-relaxed max-w-xs">
          Informații verificate și sfaturi practice pentru un somn odihnitor și o
          viață mai sănătoasă.
        </p>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col gap-2.5">
        <span
          class="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1"
        >
          Navigare
        </span>
        {#each FOOTER_NAV as link}
          <a
            href={link.href}
            class="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <!-- Partner -->
      <div>
        <span
          class="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 block"
        >
          Partener
        </span>
        <a
          href="https://zenyth.ro"
          class="group block"
          target="_blank"
          rel="noopener"
        >
          <span
            class="text-base font-semibold text-foreground group-hover:text-primary transition-colors"
          >
            Zenyth.ro
          </span>
          <p class="text-sm text-muted-foreground mt-1 leading-relaxed">
            Suplimente alimentare premium pentru un somn odihnitor și sănătos.
          </p>
          <span
            class="inline-block text-xs font-medium text-primary mt-2 group-hover:underline"
          >
            Află mai multe &rarr;
          </span>
        </a>
      </div>
    </div>

    <div
      class="border-t border-border/40 mt-12 pt-8 text-xs text-muted-foreground text-center"
    >
      &copy; {new Date().getFullYear()} {WebsiteName}
    </div>
  </div>
</footer>
