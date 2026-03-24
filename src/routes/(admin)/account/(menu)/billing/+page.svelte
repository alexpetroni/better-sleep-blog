<script lang="ts">
  import { getContext } from "svelte"
  import SettingsModule from "../settings/settings_module.svelte"
  import PricingModule from "../../../../(marketing)/pricing/pricing_module.svelte"
  import {
    pricingPlans,
    defaultPlanId,
  } from "../../../../(marketing)/pricing/pricing_plans"

  const adminSection: { value: string } = getContext("adminSection")
  adminSection.value = "billing"

  let { data } = $props()

  const currentPlanId = $derived(data.currentPlanId ?? defaultPlanId)
  const currentPlanName = $derived(
    pricingPlans.find((x) => x.id === data.currentPlanId)?.name,
  )
</script>

<svelte:head>
  <title>Facturare</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-2">
  {data.isActiveCustomer ? "Facturare" : "Alege un plan"}
</h1>
<div>
  Vezi <a
    href="/pricing"
    target="_blank"
    class="underline underline-offset-4">pagina de prețuri</a
  > pentru detalii.
</div>

{#if !data.isActiveCustomer}
  <div class="mt-8">
    <PricingModule {currentPlanId} callToAction="Alege plan" center={false} />
  </div>

  {#if data.hasEverHadSubscription}
    <div class="mt-10">
      <a href="/account/billing/manage" class="underline underline-offset-4"
        >Vezi facturile anterioare</a
      >
    </div>
  {/if}
{:else}
  <SettingsModule
    title="Abonament"
    editable={false}
    fields={[
      {
        id: "plan",
        label: "Planul curent",
        initialValue: currentPlanName || "",
      },
    ]}
    editButtonTitle="Gestionează abonamentul"
    editLink="/account/billing/manage"
  />
{/if}
