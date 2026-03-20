<script lang="ts">
  import { WebsiteName } from "./../../config"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  let mobileMenuOpen = $state(false)
</script>

<div class="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
  <div class="flex items-center h-16 container mx-auto px-4">
    <div class="flex-1">
      <a class="text-xl font-bold hover:opacity-80 transition-opacity" href="/">{WebsiteName}</a>
    </div>
    <div class="flex-none">
      <ul class="hidden sm:flex items-center gap-1 px-1 font-bold text-lg">
        <li class="md:mx-4">
          <a
            href="https://github.com/CriticalMoments/CMSaasStarter"
            class="inline-flex items-center justify-center rounded-md border border-primary px-3 py-1.5 text-sm font-medium transition-colors hover:bg-primary/10">★ us on Github</a
          >
        </li>
        <li class="md:mx-2"><a href="/blog" class="rounded-md px-3 py-1.5 transition-colors hover:bg-accent/10">Blog</a></li>
        <li class="md:mx-2"><a href="/pricing" class="rounded-md px-3 py-1.5 transition-colors hover:bg-accent/10">Pricing</a></li>
        <li class="md:mx-2"><a href="/account" class="rounded-md px-3 py-1.5 transition-colors hover:bg-accent/10">Account</a></li>
        <li class="md:mx-0">
          <a href="/search" aria-label="Search" class="inline-flex items-center justify-center rounded-full h-9 w-9 transition-colors hover:bg-accent/10">
            <svg
              fill="#000000"
              class="w-6 h-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
                fill="currentColor"
              /></svg
            >
          </a>
        </li>
      </ul>
      <div class="sm:hidden">
        <button
          onclick={() => mobileMenuOpen = !mobileMenuOpen}
          class="inline-flex items-center justify-center rounded-full h-9 w-9 transition-colors hover:bg-accent/10"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            /></svg
          >
        </button>
        {#if mobileMenuOpen}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            class="fixed inset-0 z-40 bg-black/20"
            onclick={() => mobileMenuOpen = false}
            onkeydown={(e) => e.key === 'Escape' && (mobileMenuOpen = false)}
          ></div>
          <div
            class="absolute right-4 mt-2 z-50 rounded-xl border bg-popover p-2 shadow-lg w-52 font-bold"
          >
            <a href="/blog" class="block rounded-md px-3 py-2 hover:bg-accent/10" onclick={() => mobileMenuOpen = false}>Blog</a>
            <a href="/pricing" class="block rounded-md px-3 py-2 hover:bg-accent/10" onclick={() => mobileMenuOpen = false}>Pricing</a>
            <a href="/account" class="block rounded-md px-3 py-2 hover:bg-accent/10" onclick={() => mobileMenuOpen = false}>Account</a>
            <a href="/search" class="block rounded-md px-3 py-2 hover:bg-accent/10" onclick={() => mobileMenuOpen = false}>Search</a>
            <a
              href="https://github.com/CriticalMoments/CMSaasStarter"
              class="block rounded-md px-3 py-2 border border-primary mt-1 hover:bg-primary/10"
              onclick={() => mobileMenuOpen = false}>★ us on Github</a
            >
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<div class="">
  {@render children?.()}
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="grow"></div>
<div class="">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer
    class="flex flex-col md:flex-row p-10 gap-x-48 lg:gap-x-64 xl:gap-x-96 justify-center text-base"
  >
    <nav class="flex flex-col">
      <span class="font-semibold text-sm uppercase tracking-wider opacity-80 mb-2">Explore</span>
      <a class="hover:underline mb-1" href="/">Overview</a>
      <a class="hover:underline my-1" href="/pricing">Pricing</a>
      <a class="hover:underline my-1" href="/blog">Blog</a>
      <a class="hover:underline my-1" href="/contact_us">Contact Us</a>
      <a
        class="hover:underline my-1"
        href="https://github.com/CriticalMoments/CMSaasStarter">Github</a
      >
    </nav>
    <aside class="mt-6 md:mt-0">
      <span class="font-semibold text-sm uppercase tracking-wider opacity-80 mb-2 block">Sponsor</span>
      <a class="max-w-[260px] block" href="https://getkiln.ai">
        <div class="font-bold text-3xl mb-1">Kiln AI</div>
        <div class="font-medium mb-3">Build High Quality AI Products</div>
        <div class="font-light">
          Use advanced AI tactics, and collaborate with your team. Free apps for
          Mac and Windows.
        </div>
        <div class="underline underline-offset-4 text-sm font-bold mt-2">Learn More</div>
      </a>
    </aside>
  </footer>
</div>
