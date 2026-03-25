<script lang="ts">
  import { page } from "$app/state"
  import { error } from "@sveltejs/kit"
  import { sortedBlogPosts, blogInfo, type BlogPost } from "./../posts"
  import { WebsiteName, WebsiteBaseUrl } from "../../../../config"
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  const BREADCRUMB_HOME = "Acasă"
  const BREADCRUMB_BLOG = "Articole"

  function getCurrentPost(url: string): BlogPost {
    let searchPost: BlogPost | null = null
    for (const post of sortedBlogPosts) {
      if (url == post.link || url == post.link + "/") {
        searchPost = post
        continue
      }
    }
    if (!searchPost) {
      error(404, "Articolul nu a fost găsit")
    }
    return searchPost
  }
  let currentPost = $derived(getCurrentPost(page.url.pathname))

  function buildLdJson(post: BlogPost, url: string) {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url,
      datePublished: post.parsedDate?.toISOString(),
      dateModified: post.parsedDate?.toISOString(),
      inLanguage: "ro",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      isPartOf: {
        "@type": "Blog",
        name: blogInfo.name,
        url: `${WebsiteBaseUrl}/blog`,
      },
      publisher: {
        "@type": "Organization",
        name: WebsiteName,
        url: WebsiteBaseUrl,
      },
    }
  }
  let pageUrl = $derived(`${WebsiteBaseUrl}${currentPost.link}`)
  let jsonldScript = $derived(
    `<script type="application/ld+json">${
      JSON.stringify(buildLdJson(currentPost, pageUrl)) + "<"
    }/script>`,
  )
</script>

<svelte:head>
  <title>{currentPost.title} — {WebsiteName}</title>
  <meta name="description" content={currentPost.description} />
  <link rel="canonical" href={pageUrl} />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={currentPost.title} />
  <meta property="og:description" content={currentPost.description} />
  <meta property="og:site_name" content={WebsiteName} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:locale" content="ro_RO" />
  <meta
    property="article:published_time"
    content={currentPost.parsedDate?.toISOString()}
  />
  <meta
    property="article:modified_time"
    content={currentPost.parsedDate?.toISOString()}
  />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={currentPost.title} />
  <meta name="twitter:description" content={currentPost.description} />

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="max-w-[680px] mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-28">
  <!-- Breadcrumb -->
  <nav class="flex items-center gap-1.5 text-xs text-muted-foreground mb-8">
    <a href="/" class="hover:text-foreground transition-colors">
      {BREADCRUMB_HOME}
    </a>
    <span class="text-border">/</span>
    <a href="/blog" class="hover:text-foreground transition-colors">
      {BREADCRUMB_BLOG}
    </a>
    <span class="text-border">/</span>
    <span class="text-foreground/60 truncate max-w-[200px]">
      {currentPost.title}
    </span>
  </nav>

  <!-- Article header -->
  <header class="mb-10">
    <time
      class="text-xs font-medium text-muted-foreground uppercase tracking-wide"
      datetime={currentPost.date}
    >
      {currentPost.parsedDate?.toLocaleDateString("ro-RO", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}
    </time>
    <h1
      class="mt-3 text-3xl md:text-4xl leading-tight md:leading-tight tracking-tight text-foreground"
    >
      {currentPost.title}
    </h1>
    <p class="mt-4 text-lg text-muted-foreground leading-relaxed font-light">
      {currentPost.description}
    </p>
    <div class="mt-6 border-b border-border/40"></div>
  </header>

  <!-- Article body -->
  <article
    class="prose prose-lg max-w-none
      prose-p:leading-[1.8] prose-p:text-[16.5px] prose-p:font-light
      prose-headings:tracking-tight prose-headings:mt-10 prose-headings:mb-4
      prose-h2:text-2xl prose-h3:text-xl
      prose-a:text-primary prose-a:underline prose-a:underline-offset-4 prose-a:decoration-primary/30 hover:prose-a:decoration-primary
      prose-blockquote:border-l-primary/30 prose-blockquote:not-italic prose-blockquote:font-light
      prose-li:text-[16.5px] prose-li:leading-[1.8] prose-li:font-light
      prose-strong:font-semibold
      prose-img:rounded-lg prose-img:shadow-sm"
  >
    {@render children?.()}
  </article>

  <!-- Back link -->
  <div class="mt-16 pt-8 border-t border-border/40">
    <a
      href="/blog"
      class="text-sm font-medium text-primary hover:underline underline-offset-4"
    >
      &larr; Toate articolele
    </a>
  </div>
</div>
