<script lang="ts">
  import { getContext } from "svelte"
  import SettingsModule from "../settings_module.svelte"

  const adminSection: { value: string } = getContext("adminSection")
  adminSection.value = "settings"
</script>

<svelte:head>
  <title>Resetează parola</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Setări</h1>

<SettingsModule
  title="Resetează parola"
  editable={true}
  saveButtonTitle="Resetează parola"
  successTitle="Parola a fost schimbată"
  successBody="La următoarea conectare, folosește noua parolă."
  formTarget="/account/api?/updatePassword"
  fields={[
    {
      id: "newPassword1",
      label: "Parolă nouă",
      initialValue: "",
      inputType: "password",
    },
    {
      id: "newPassword2",
      label: "Confirmă parola nouă",
      initialValue: "",
      inputType: "password",
    },
  ]}
/>
