<script lang="ts">
  import { getContext } from "svelte"
  import SettingsModule from "../settings_module.svelte"

  const adminSection: { value: string } = getContext("adminSection")
  adminSection.value = "settings"

  let { data } = $props()
</script>

<svelte:head>
  <title>Schimbă email</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Setări</h1>

<SettingsModule
  title="Schimbă email"
  editable={true}
  successTitle="Schimbarea de email a fost inițiată"
  successBody="Vei primi emailuri la adresa veche și la cea nouă pentru a confirma schimbarea. Te rugăm să apeși pe linkul din ambele emailuri. Până la finalizare, te poți conecta cu emailul curent."
  formTarget="/account/api?/updateEmail"
  fields={[
    {
      id: "email",
      label: "Email",
      initialValue: data.user?.email ?? "",
      placeholder: "Adresă de email",
    },
  ]}
/>
