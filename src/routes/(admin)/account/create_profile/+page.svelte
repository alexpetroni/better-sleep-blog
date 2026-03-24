<script lang="ts">
  import { applyAction, enhance } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import "../../../../app.css"
  import { Button } from "$lib/components/ui/button/index.js"

  interface User {
    email: string
  }

  interface Profile {
    full_name?: string
  }

  interface Props {
    data: { user: User; profile: Profile }
    form: FormAccountUpdateResult
  }

  let { data, form }: Props = $props()

  const user = $derived(data.user)
  const profile = $derived(data.profile)

  let loading = $state(false)
  const fullName = $derived(profile?.full_name ?? "")

  const fieldError = (liveForm: FormAccountUpdateResult, name: string) => {
    let errors = liveForm?.errorFields ?? []
    return errors.includes(name)
  }

  const handleSubmit: SubmitFunction = () => {
    loading = true
    return async ({ update, result }) => {
      await update({ reset: false })
      await applyAction(result)
      loading = false
    }
  }
</script>

<svelte:head>
  <title>Creează profil</title>
</svelte:head>

<div
  class="text-center content-center max-w-lg mx-auto min-h-[100vh] pb-12 flex items-center place-content-center"
>
  <div class="flex flex-col w-64 lg:w-80">
    <div>
      <h1 class="text-2xl font-bold mb-6">Creează profil</h1>
      <form
        class="form-widget"
        method="POST"
        action="/account/api?/updateProfile"
        use:enhance={handleSubmit}
      >
        <div class="mt-4">
          <label for="fullName">
            <span class="text-l text-center">Numele tău</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Numele complet"
            class="{fieldError(form, 'fullName')
              ? 'border-destructive focus-visible:ring-destructive'
              : ''} mt-1 flex h-9 w-full max-w-xs rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            value={form?.fullName ?? fullName}
            maxlength="50"
          />
        </div>

        <div class="mt-4">
          <label for="email">
            <span class="text-l text-center">Email</span>
          </label>
          <input
            id="email"
            type="email"
            value={user?.email}
            disabled
            class="mt-1 flex h-9 w-full max-w-xs rounded-md border border-input bg-muted px-3 py-1 text-base text-muted-foreground"
          />
        </div>

        {#if form?.errorMessage}
          <p class="text-red-700 text-sm font-bold text-center mt-3">
            {form?.errorMessage}
          </p>
        {/if}
        <div class="mt-4">
          <Button type="submit" class="mt-3 min-w-[200px]" disabled={loading}>
            {loading ? "..." : "Creează profil"}
          </Button>
        </div>
      </form>

      <div class="text-sm text-slate-800 mt-14">
        Ești autentificat ca {user?.email}.
        <br />
        <a class="underline" href="/account/sign_out"> Deconectare </a>
      </div>
    </div>
  </div>
</div>
