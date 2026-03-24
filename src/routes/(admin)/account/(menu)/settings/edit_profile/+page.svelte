<script lang="ts">
  import SettingsModule from "../settings_module.svelte"
  import { getContext } from "svelte"

  const adminSection: { value: string } = getContext("adminSection")
  adminSection.value = "settings"

  let { data } = $props()
  const profile = $derived(data.profile)
</script>

<svelte:head>
  <title>Editează profil</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Setări</h1>

<SettingsModule
  editable={true}
  title="Editează profil"
  successTitle="Profil salvat"
  formTarget="/account/api?/updateProfile"
  fields={[
    {
      id: "fullName",
      label: "Nume",
      initialValue: profile?.full_name ?? "",
      placeholder: "Numele tău complet",
      maxlength: 50,
    },
  ]}
/>
