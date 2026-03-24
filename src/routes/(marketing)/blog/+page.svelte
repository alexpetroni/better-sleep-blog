<script lang="ts">
  import { sortedBlogPosts, blogInfo } from "./posts"
</script>

<svelte:head>
  <title>{blogInfo.name}</title>
  <meta name="description" content={blogInfo.description} />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-lg mx-auto">
  <div
    class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center"
  >
    <div
      class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-highlight"
    >
      {blogInfo.name}
    </div>
    <a href="/blog/rss.xml" target="_blank" rel="noreferrer">
      <img
        class="flex-none w-5 h-5 object-contain"
        src="/images/rss.svg"
        alt="flux RSS"
      />
    </a>
  </div>
  <div class="text-lg text-center">{blogInfo.description}</div>

  {#each sortedBlogPosts as post}
    <a href={post.link}>
      <div
        class="rounded-xl border bg-card shadow-xl my-6 flex-row overflow-hidden flex"
      >
        <div class="flex-none w-6 md:w-32 bg-secondary"></div>
        <div class="py-6 px-6">
          <div class="text-xl">{post.title}</div>
          <div class="text-sm text-highlight">
            {post.parsedDate?.toLocaleDateString("ro-RO", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div class="text-slate-500">{post.description}</div>
        </div>
      </div>
    </a>
  {/each}
</div>
