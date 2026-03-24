<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"
  import { buttonVariants } from "$lib/components/ui/button/index.js"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const topics = [
    {
      name: "Cauzele insomniei",
      description:
        "De ce nu poți dormi? Explorează factorii fizici, psihici și de mediu care îți afectează somnul.",
      link: "/blog",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    },
    {
      name: "Suplimente naturale",
      description:
        "Melatonină, magneziu, valeriana și alte remedii naturale testate științific pentru un somn mai bun.",
      link: "/blog",
      icon: "M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67C7.9 20.87 9.95 21.66 12 21.66s4.1-.79 5.66-2.35C19.22 17.75 20 15.64 20 13.64S19.22 9.56 17.66 8z",
    },
    {
      name: "Igiena somnului",
      description:
        "Rutine, obiceiuri și tehnici dovedite care te ajută să adormi mai repede și să dormi mai profund.",
      link: "/blog",
      icon: "M6.05 4.14l-.39-.39c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l.39.39c.39.39 1.02.39 1.41 0 .39-.38.39-1.02 0-1.41zM3.01 10.5H1.99c-.55 0-1 .45-1 1s.45 1 1 1h1.02c.55 0 1-.45 1-1s-.45-1-1-1zm9-9.95c-.55 0-1 .45-1 1v1.02c0 .55.45 1 1 1s1-.45 1-1V1.55c0-.55-.45-1-1-1zm7.45 3.91c-.39-.39-1.02-.39-1.41 0l-.39.39c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.39-.39c.39-.39.39-1.02 0-1.41zm-3.21 13.7l.39.39c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-.39-.39c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41zM22.01 10.5h-1.02c-.55 0-1 .45-1 1s.45 1 1 1h1.02c.55 0 1-.45 1-1s-.45-1-1-1zm-9 8c-.55 0-1 .45-1 1v1.02c0 .55.45 1 1 1s1-.45 1-1v-1.02c0-.55-.45-1-1-1zM5.66 19.36l-.39.39c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.39-.39c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.41 0zM12 6.5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z",
    },
    {
      name: "Alimentație și somn",
      description:
        "Ce să mănânci și ce să eviți seara. Legătura dintre digestie, nutrienți și calitatea somnului.",
      link: "/blog",
      icon: "M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z",
    },
    {
      name: "Tulburări de somn",
      description:
        "Apnee, bruxism, sindromul picioarelor neliniștite și alte afecțiuni care îți perturbă odihna.",
      link: "/blog",
      icon: "M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z",
    },
    {
      name: "Somnul și sănătatea",
      description:
        "Cum influențează somnul sistemul imunitar, greutatea, memoria și starea de spirit.",
      link: "/blog",
      icon: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z",
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName} - Somnul sănătos începe aici</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="flex min-h-[60vh] items-center justify-center">
  <div class="text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-highlight mb-3 md:mb-7 pb-1"
      >
        Better Sleep
      </div>

      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        Ghidul tău pentru un
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >somn</span
        >
        mai
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >bun</span
        >
        și o
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >viață</span
        >
        mai sănătoasă
      </div>
      <div class="mt-6 md:mt-10 text-sm md:text-lg">
        Articole despre cauzele insomniei, suplimente naturale, igiena somnului
        și tehnici validate științific pentru un somn odihnitor.
      </div>
      <div
        class="mt-6 md:mt-4 flex flex-row flex-wrap gap-4 place-content-center"
      >
        <a
          href="/blog"
          class="{buttonVariants({ variant: 'default' })} px-6"
          >Citește articolele</a
        >
        <a
          href="/contact_us"
          class="{buttonVariants({ variant: 'outline' })} px-6"
        >
          Contactează-ne
        </a>
      </div>
    </div>
  </div>
</div>
<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-highlight pb-2"
      >
        Ce vei descoperi
      </div>
      <div class="mt-4 text-xl font-bold">
        Informații
        <span
          class="underline decoration-secondary decoration-[3px] md:decoration-[4px]"
        >
          practice și ușor de aplicat
        </span>
        pentru un somn mai bun
      </div>
    </div>

    <div
      class="flex gap-6 mt-12 max-w-[1064px] mx-auto place-content-center flex-wrap"
    >
      {#each topics as topic}
        <div
          class="rounded-xl border bg-card w-[270px] min-h-[250px] flex-none shadow-xl"
        >
          <div
            class="flex flex-col items-center text-center p-[24px] pt-[32px]"
          >
            <div>
              <svg
                width="50px"
                height="50px"
                class="mb-2 mt-1"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={topic.icon} />
              </svg>
            </div>
            <h2 class="font-semibold text-lg">
              {topic.name}
            </h2>
            <p class="text-sm">
              {topic.description}
            </p>
            {#if topic.link}
              <a
                href={topic.link}
                class="{buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                })} rounded-full min-w-[100px] mt-2 mb-4"
              >
                Citește
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="flex min-h-[40vh] items-center justify-center mt-12">
  <div class="text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-highlight mt-4 pb-2"
      >
        De ce contează somnul?
      </div>
      <div class="mt-6 text-lg md:text-xl px-4">
        Un somn de calitate este esențial pentru sănătatea fizică și mentală.
        Lipsa somnului afectează memoria, imunitatea, metabolismul și starea de
        spirit. Pe acest blog vei găsi informații verificate și sfaturi practice
        pentru a dormi mai bine în fiecare noapte.
      </div>
      <div class="mt-8">
        <a
          href="/blog"
          class="{buttonVariants({ variant: 'default' })} min-w-[200px]"
          >Explorează blogul</a
        >
      </div>
    </div>
  </div>
</div>
