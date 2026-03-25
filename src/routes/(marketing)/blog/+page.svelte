<script lang="ts">
  import { sortedBlogPosts, blogInfo } from "./posts"

  const PAGE_TITLE = blogInfo.name
  const PAGE_DESCRIPTION = blogInfo.description
  const RSS_LABEL = "flux RSS"

  function estimateReadingTime(description: string): number {
    const words = description.split(/\s+/).length
    return Math.max(5, Math.min(8, Math.ceil(words / 10)))
  }
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>
  <meta name="description" content={PAGE_DESCRIPTION} />
</svelte:head>

<div class="max-w-3xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28">
  <!-- Header -->
  <div class="text-center mb-14">
    <h1 class="text-3xl md:text-4xl tracking-tight text-foreground">
      {PAGE_TITLE}
    </h1>
    <p class="mt-3 text-muted-foreground text-lg font-light">
      {PAGE_DESCRIPTION}
    </p>
    <a
      href="/blog/rss.xml"
      target="_blank"
      rel="noreferrer"
      class="inline-flex items-center gap-1.5 mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"
        />
      </svg>
      {RSS_LABEL}
    </a>
  </div>

  <!-- Article list -->
  <div class="flex flex-col gap-1">
    {#each sortedBlogPosts as post}
      <a href={post.link} class="group block">
        <article
          class="py-6 border-b border-border/40 last:border-b-0 transition-colors"
        >
          <div class="flex items-baseline gap-3 flex-wrap">
            <time
              class="text-xs text-muted-foreground tabular-nums shrink-0"
              datetime={post.date}
            >
              {post.parsedDate?.toLocaleDateString("ro-RO", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <span class="text-xs text-muted-foreground/60">
              &middot; {estimateReadingTime(post.description)} min
            </span>
          </div>
          <h2
            class="mt-1.5 text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors"
            style="font-family: var(--font-body);"
          >
            {post.title}
          </h2>
          <p class="mt-1.5 text-sm text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </article>
      </a>
    {/each}
  </div>
</div>
