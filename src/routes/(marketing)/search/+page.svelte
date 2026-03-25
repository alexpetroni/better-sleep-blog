<script lang="ts">
  import { page } from "$app/state"
  import { browser } from "$app/environment"
  import { onMount } from "svelte"
  import Fuse from "fuse.js"
  import { goto } from "$app/navigation"
  import { dev } from "$app/environment"

  const PAGE_TITLE = "Căutare"
  const PLACEHOLDER = "Caută articole..."
  const LOADING_TEXT = "Se încarcă..."
  const ERROR_TEXT =
    "Eroare la conectarea la căutare. Te rugăm să încerci din nou mai târziu."
  const NO_RESULTS_TEXT = "Nu s-au găsit rezultate"

  const fuseOptions = {
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
      { name: "body", weight: 1 },
    ],
    ignoreLocation: true,
    threshold: 0.3,
  }

  let fuse: Fuse<Result> | undefined = $state()

  let loading = $state(true)
  let error = $state(false)
  onMount(async () => {
    try {
      const response = await fetch("/search/api.json")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const searchData = await response.json()
      if (searchData && searchData.index && searchData.indexData) {
        const index = Fuse.parseIndex(searchData.index)
        fuse = new Fuse<Result>(searchData.indexData, fuseOptions, index)
      }
    } catch (e) {
      console.error("Failed to load search data", e)
      error = true
    } finally {
      loading = false
      document.getElementById("search-input")?.focus()
    }
  })

  type Result = {
    item: {
      title: string
      description: string
      body: string
      path: string
    }
  }
  let results: Result[] = $state([])

  let searchQuery = $state(decodeURIComponent(page.url.hash.slice(1) ?? ""))
  $effect(() => {
    if (fuse) {
      results = fuse.search(searchQuery)
    }
  })
  $effect(() => {
    if (browser && window.location.hash.slice(1) !== searchQuery) {
      goto("#" + searchQuery, { keepFocus: true })
    }
  })

  let focusItem = $state(0)
  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      searchQuery = ""
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      focusItem += event.key === "ArrowDown" ? 1 : -1
      if (focusItem < 0) {
        focusItem = 0
      } else if (focusItem > results.length) {
        focusItem = results.length
      }
      if (focusItem === 0) {
        document.getElementById("search-input")?.focus()
      } else {
        document.getElementById(`search-result-${focusItem}`)?.focus()
      }
    }
  }
</script>

<svelte:window onkeydown={onKeyDown} />

<svelte:head>
  <title>{PAGE_TITLE}</title>
  <meta name="description" content="Caută pe site-ul nostru." />
</svelte:head>

<div class="max-w-2xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28">
  <h1 class="text-3xl md:text-4xl tracking-tight text-foreground text-center">
    {PAGE_TITLE}
  </h1>

  <div class="mt-8 mb-6">
    <input
      id="search-input"
      type="text"
      class="flex h-11 w-full rounded-lg border border-border bg-card px-4 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/40"
      placeholder={PLACEHOLDER}
      bind:value={searchQuery}
      onfocus={() => (focusItem = 0)}
      aria-label={PAGE_TITLE}
    />
  </div>

  {#if loading && searchQuery.length > 0}
    <p class="text-center mt-10 text-muted-foreground">{LOADING_TEXT}</p>
  {/if}

  {#if error}
    <p class="text-center mt-10 text-muted-foreground">{ERROR_TEXT}</p>
  {/if}

  {#if !loading && searchQuery.length > 0 && results.length === 0 && !error}
    <p class="text-center mt-10 text-muted-foreground">{NO_RESULTS_TEXT}</p>
    {#if dev}
      <p class="text-center mt-4 text-xs font-mono text-muted-foreground/60">
        Development mode: rebuild search index with `npm run build`
      </p>
    {/if}
  {/if}

  <div class="flex flex-col gap-1">
    {#each results as result, i}
      <a
        href={result.item.path || "/"}
        id="search-result-{i + 1}"
        class="group block py-5 border-b border-border/40 last:border-b-0 focus:outline-none focus:bg-accent/30 rounded-lg focus:px-4 transition-colors"
      >
        <h2
          class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
          style="font-family: var(--font-body);"
        >
          {result.item.title}
        </h2>
        <p class="mt-1 text-sm text-muted-foreground leading-relaxed">
          {result.item.description}
        </p>
      </a>
    {/each}
  </div>
</div>
