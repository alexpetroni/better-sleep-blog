<script lang="ts">
  import { page } from "$app/state"
  import { error } from "@sveltejs/kit"
  import { sortedBlogPosts, blogInfo, type BlogPost } from "./../posts"
  import { WebsiteName, WebsiteBaseUrl } from "../../../../config"
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  function getCurrentPost(url: string): BlogPost {
    let searchPost: BlogPost | null = null
    for (const post of sortedBlogPosts) {
      if (url == post.link || url == post.link + "/") {
        searchPost = post
        continue
      }
    }
    if (!searchPost) {
      error(404, "Blog post not found")
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
  <title>{currentPost.title}</title>
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

<article class="prose mx-auto py-12 px-6 font-sans">
  <div class="text-sm text-highlight">
    {currentPost.parsedDate?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}
  </div>
  <h1>{currentPost.title}</h1>
  {@render children?.()}
</article>
