<script lang="ts">
  import { getContext } from "svelte"
  import SettingsModule from "../settings_module.svelte"

  const adminSection: { value: string } = getContext("adminSection")
  adminSection.value = "settings"

  let { data } = $props()
</script>

<svelte:head>
  <title>Șterge contul</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Setări</h1>

<SettingsModule
  title="Șterge contul"
  editable={true}
  dangerous={true}
  message="Ștergerea contului nu poate fi anulată. Ești conectat ca '{data
    .session?.user?.email}'"
  saveButtonTitle="Șterge contul"
  successTitle="Contul a fost programat pentru ștergere"
  successBody="Contul tău va fi șters în curând."
  formTarget="/account/api?/deleteAccount"
  fields={[
    {
      id: "currentPassword",
      label: "Parola curentă",
      initialValue: "",
      inputType: "password",
    },
  ]}
/>
