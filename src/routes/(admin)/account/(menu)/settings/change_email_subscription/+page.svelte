<script lang="ts">
  import SettingsModule from "../settings_module.svelte"
  let { data } = $props()
  const unsubscribed = $derived(data.profile?.unsubscribed)
</script>

<svelte:head>
  <title>Schimbă abonarea email</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Abonare email</h1>

<SettingsModule
  editable={true}
  title="Abonare"
  message={unsubscribed
    ? "Ești dezabonat de la emailuri"
    : "Ești abonat la emailuri"}
  saveButtonTitle={unsubscribed ? "Reabonare" : "Dezabonare"}
  successBody={unsubscribed
    ? "Ai fost reabonat la emailuri"
    : "Ai fost dezabonat de la emailuri"}
  formTarget="/account/api?/toggleEmailSubscription"
  fields={[]}
/>
