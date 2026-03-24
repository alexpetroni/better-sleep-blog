<script lang="ts">
  import PricingModule from "../../../(marketing)/pricing/pricing_module.svelte"
</script>

<svelte:head>
  <title>Alege un plan</title>
</svelte:head>

<div
  class="text-center content-center min-h-[100vh] pb-12 mt-4 flex items-center place-content-center"
>
  <div class="flex flex-col w-full px-6">
    <div>
      <h1 class="text-2xl font-bold mb-2">Alege un plan</h1>
      <div class="mb-6">
        Vezi <a
          href="/pricing"
          target="_blank"
          class="underline underline-offset-4">pagina de prețuri</a
        > pentru detalii.
      </div>
      <PricingModule callToAction="Alege plan" />
    </div>
  </div>
</div>
