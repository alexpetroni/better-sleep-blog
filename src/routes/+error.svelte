<script lang="ts">
  import "../app.css"
  import { page } from "$app/state"
  import { buttonVariants } from "$lib/components/ui/button/index.js"
</script>

<div class="flex min-h-[100vh] items-center justify-center">
  <div class="text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">This is embarrassing...</h1>
      <p class="py-6 text-2xl">There was an error: {page?.error?.message}</p>
      <div>
        <a href="/" class="{buttonVariants({ variant: 'default' })} min-w-[200px]">Return Home</a>
      </div>
    </div>
  </div>
</div>
