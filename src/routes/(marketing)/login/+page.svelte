<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button/index.js"
</script>

<svelte:head>
  <title>Autentificare</title>
</svelte:head>

<div>
  <h1 class="text-xl font-bold">Începe aici</h1>
  <a
    href="/login/sign_up"
    class="{buttonVariants({ variant: 'default' })} mt-3 min-w-[200px]"
    >Creează cont</a
  >

  <h1 class="text-xl mt-6">Ai deja un cont?</h1>
  <a
    href="/login/sign_in"
    class="{buttonVariants({ variant: 'outline' })} mt-3 min-w-[200px]"
    >Conectare</a
  >
</div>
