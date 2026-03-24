<script lang="ts">
  import { getContext } from "svelte"

  const adminSection: { value: string } = getContext("adminSection")
  adminSection.value = "home"
</script>

<svelte:head>
  <title>Cont</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Panou de control</h1>
<p class="text-muted-foreground">
  Bine ai venit! Folosește meniul din stânga pentru a naviga.
</p>
