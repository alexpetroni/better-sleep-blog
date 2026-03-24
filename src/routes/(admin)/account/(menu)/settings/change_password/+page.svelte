<script lang="ts">
  import { page } from "$app/state"
  import { getContext } from "svelte"
  import SettingsModule from "../settings_module.svelte"
  import { Button } from "$lib/components/ui/button/index.js"
  import { Alert, AlertDescription } from "$lib/components/ui/alert/index.js"

  const adminSection: { value: string } = getContext("adminSection")
  adminSection.value = "settings"

  let { data } = $props()
  const user = $derived(data.user)
  const supabase = $derived(data.supabase)

  // True if definitely has a password, but can be false if they
  // logged in with oAuth or email link

  const hasPassword = $derived.by(() => {
    // @ts-expect-error: we ignore because Supabase does not maintain an AMR typedef
    return user?.amr?.find((x) => x.method === "password") ? true : false
  })

  const usingOAuth = $derived.by(() => {
    // @ts-expect-error: we ignore because Supabase does not maintain an AMR typedef
    return user?.amr?.find((x) => x.method === "oauth") ? true : false
  })

  let sendBtnDisabled = $state(false)
  let sendBtnText = $state("Trimite email pentru setare parolă")
  let sentEmail = $state(false)
  let sendForgotPassword = () => {
    sendBtnDisabled = true
    sendBtnText = "Se trimite..."

    let email = user?.email
    if (email) {
      supabase.auth
        .resetPasswordForEmail(email, {
          redirectTo: `${page.url.origin}/auth/callback?next=%2Faccount%2Fsettings%2Freset_password`,
        })
        .then((d) => {
          sentEmail = d.error ? false : true
          sendBtnDisabled = false
          sendBtnText = "Trimite email resetare parolă"
        })
    }
  }
</script>

<svelte:head>
  <title>Schimbă parola</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Schimbă parola</h1>

{#if hasPassword}
  <SettingsModule
    title="Schimbă parola"
    editable={true}
    saveButtonTitle="Schimbă parola"
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
      {
        id: "currentPassword",
        label: "Parola curentă",
        initialValue: "",
        inputType: "password",
      },
    ]}
  />
{:else}
  <div
    class="rounded-xl border bg-card shadow-sm p-6 pb-7 mt-8 max-w-xl flex flex-col md:flex-row max-w-md"
  >
    <div class="flex flex-col gap-y-4">
      {#if usingOAuth}
        <div class="font-bold">Setează parola prin email</div>
        <div>
          Te conectezi prin oAuth ("Conectare cu Github" sau similar). Poți
          continua să accesezi contul doar prin oAuth dacă dorești!
        </div>
      {:else}
        <div class="font-bold">Schimbă parola prin email</div>
      {/if}
      <div>
        Butonul de mai jos îți va trimite un email la {user?.email} care îți va
        permite să îți setezi parola.
      </div>
      <Button
        variant="outline"
        class="min-w-[200px] {sentEmail ? 'hidden' : ''}"
        disabled={sendBtnDisabled}
        onclick={sendForgotPassword}
      >
        {sendBtnText}
      </Button>
      {#if sentEmail}
        <Alert variant="success">
          <AlertDescription>
            Email trimis! Verifică inbox-ul și folosește linkul pentru a-ți seta
            parola.
          </AlertDescription>
        </Alert>
      {/if}
    </div>
  </div>
{/if}
