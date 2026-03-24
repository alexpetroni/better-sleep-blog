<script lang="ts">
  import { getContext } from "svelte"
  import SettingsModule from "./settings_module.svelte"

  const adminSection: { value: string } = getContext("adminSection")
  adminSection.value = "settings"

  let { data } = $props()
  const profile = $derived(data.profile)
  const user = $derived(data.user)
</script>

<svelte:head>
  <title>Setări</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Setări</h1>

<SettingsModule
  title="Profil"
  editable={false}
  fields={[
    { id: "fullName", label: "Nume", initialValue: profile?.full_name ?? "" },
  ]}
  editButtonTitle="Editează profil"
  editLink="/account/settings/edit_profile"
/>

<SettingsModule
  title="Email"
  editable={false}
  fields={[{ id: "email", initialValue: user?.email || "" }]}
  editButtonTitle="Schimbă email"
  editLink="/account/settings/change_email"
/>

<SettingsModule
  title="Parolă"
  editable={false}
  fields={[{ id: "password", initialValue: "••••••••••••••••" }]}
  editButtonTitle="Schimbă parola"
  editLink="/account/settings/change_password"
/>

<SettingsModule
  title="Abonare email"
  editable={false}
  fields={[
    {
      id: "subscriptionStatus",
      initialValue: profile?.unsubscribed ? "Dezabonat" : "Abonat",
    },
  ]}
  editButtonTitle="Schimbă abonarea"
  editLink="/account/settings/change_email_subscription"
/>

<SettingsModule
  title="Zonă periculoasă"
  editable={false}
  dangerous={true}
  fields={[]}
  editButtonTitle="Șterge contul"
  editLink="/account/settings/delete_account"
/>
