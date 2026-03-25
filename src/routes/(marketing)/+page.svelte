<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"
  import { buttonVariants } from "$lib/components/ui/button/index.js"
  import { sortedBlogPosts } from "./blog/posts"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const HERO_TITLE = "Înțelege-ți somnul. Îmbunătățește-ți viața."
  const HERO_SUBTITLE =
    "Articole scrise cu grijă despre știința somnului, cauzele insomniei și soluții naturale validate de cercetare."
  const HERO_CTA = "Explorează articolele"

  const SECTION_TITLE = "Cele mai recente articole"
  const SECTION_SUBTITLE =
    "Fiecare articol pornește de la o întrebare reală și oferă răspunsuri susținute de studii."

  const VALUE_ITEMS = [
    {
      title: "Bazat pe cercetare",
      description:
        "Fiecare articol citează studii și mecanisme fiziologice, nu sfaturi generice.",
    },
    {
      title: "Practic și aplicabil",
      description:
        "Informații pe care le poți pune în practică din prima noapte.",
    },
    {
      title: "Fără presiune comercială",
      description:
        "Conținut educativ pur, fără vânzări agresive sau promisiuni exagerate.",
    },
  ]

  const VALUE_SECTION_TITLE = "De ce Better Sleep?"
  const VALUE_SECTION_TEXT =
    "Un somn de calitate este fundamentul sănătății fizice și mentale. Nu există scurtături — dar există cunoștințe care fac diferența."

  const BOTTOM_CTA_TITLE = "Începe să citești"
  const BOTTOM_CTA_TEXT =
    "Peste 40 de articole despre somn, nutriție, suplimente și igiena somnului te așteaptă."
  const BOTTOM_CTA_BUTTON = "Vezi toate articolele"

  const featuredPosts = sortedBlogPosts.slice(0, 6)

  function estimateReadingTime(description: string): number {
    // Rough estimate: blog posts average 5-8 min
    const words = description.split(/\s+/).length
    return Math.max(5, Math.min(8, Math.ceil(words / 10)))
  }
</script>

<svelte:head>
  <title>{WebsiteName} — Somnul sănătos începe aici</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden">
  <div
    class="max-w-3xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36 text-center"
  >
    <h1
      class="text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-tight tracking-tight text-foreground"
    >
      {HERO_TITLE}
    </h1>
    <p
      class="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light"
    >
      {HERO_SUBTITLE}
    </p>
    <div class="mt-10">
      <a
        href="/blog"
        class="{buttonVariants({ variant: 'default' })} px-8 py-3 text-base"
      >
        {HERO_CTA}
      </a>
    </div>
  </div>
  <!-- Subtle decorative gradient -->
  <div
    class="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 via-transparent to-transparent"
  ></div>
</section>

<!-- Featured articles -->
<section class="max-w-5xl mx-auto px-6 pb-24">
  <div class="text-center mb-14">
    <h2 class="text-3xl md:text-4xl tracking-tight text-foreground">
      {SECTION_TITLE}
    </h2>
    <p class="mt-4 text-muted-foreground text-lg max-w-xl mx-auto font-light">
      {SECTION_SUBTITLE}
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each featuredPosts as post}
      <a href={post.link} class="group block">
        <article
          class="h-full rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md flex flex-col"
        >
          <time
            class="text-xs font-medium text-muted-foreground uppercase tracking-wide"
            datetime={post.date}
          >
            {post.parsedDate?.toLocaleDateString("ro-RO", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <h3
            class="mt-3 text-lg leading-snug text-foreground group-hover:text-primary transition-colors"
            style="font-family: var(--font-body); font-weight: 600;"
          >
            {post.title}
          </h3>
          <p
            class="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow"
          >
            {post.description}
          </p>
          <div class="mt-4 flex items-center gap-2">
            <span class="text-xs text-primary font-medium">
              {estimateReadingTime(post.description)} min citire
            </span>
          </div>
        </article>
      </a>
    {/each}
  </div>

  <div class="text-center mt-12">
    <a
      href="/blog"
      class="{buttonVariants({ variant: 'outline' })} px-8"
    >
      {BOTTOM_CTA_BUTTON}
    </a>
  </div>
</section>

<!-- Value proposition -->
<section class="bg-secondary/30">
  <div class="max-w-5xl mx-auto px-6 py-20 md:py-28">
    <div class="max-w-2xl mx-auto text-center mb-14">
      <h2 class="text-3xl md:text-4xl tracking-tight text-foreground">
        {VALUE_SECTION_TITLE}
      </h2>
      <p
        class="mt-4 text-muted-foreground text-lg leading-relaxed font-light"
      >
        {VALUE_SECTION_TEXT}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {#each VALUE_ITEMS as item}
        <div class="text-center md:text-left">
          <h3
            class="text-base font-semibold text-foreground mb-2"
            style="font-family: var(--font-body);"
          >
            {item.title}
          </h3>
          <p class="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Bottom CTA -->
<section class="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
  <h2 class="text-3xl md:text-4xl tracking-tight text-foreground">
    {BOTTOM_CTA_TITLE}
  </h2>
  <p
    class="mt-4 text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed font-light"
  >
    {BOTTOM_CTA_TEXT}
  </p>
  <div class="mt-8">
    <a
      href="/blog"
      class="{buttonVariants({ variant: 'default' })} px-8 py-3 text-base"
    >
      {BOTTOM_CTA_BUTTON}
    </a>
  </div>
</section>
