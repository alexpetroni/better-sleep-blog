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
    company_name?: string
    website?: string
  }

  interface Props {
    data: { user: User; profile: Profile }
    form: FormAccountUpdateResult
  }

  let { data, form }: Props = $props()

  let { user, profile } = data

  let loading = $state(false)
  let fullName: string = profile?.full_name ?? ""
  let companyName: string = profile?.company_name ?? ""
  let website: string = profile?.website ?? ""

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
  <title>Create Profile</title>
</svelte:head>

<div
  class="text-center content-center max-w-lg mx-auto min-h-[100vh] pb-12 flex items-center place-content-center"
>
  <div class="flex flex-col w-64 lg:w-80">
    <div>
      <h1 class="text-2xl font-bold mb-6">Create Profile</h1>
      <form
        class="form-widget"
        method="POST"
        action="/account/api?/updateProfile"
        use:enhance={handleSubmit}
      >
        <div class="mt-4">
          <label for="fullName">
            <span class="text-l text-center">Your Name</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your full name"
            class="{fieldError(form, 'fullName')
              ? 'border-destructive focus-visible:ring-destructive'
              : ''} mt-1 flex h-9 w-full max-w-xs rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            value={form?.fullName ?? fullName}
            maxlength="50"
          />
        </div>

        <div class="mt-4">
          <label for="companyName">
            <span class="text-l text-center">Company Name</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Company name"
            class="{fieldError(form, 'companyName')
              ? 'border-destructive focus-visible:ring-destructive'
              : ''} mt-1 flex h-9 w-full max-w-xs rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            value={form?.companyName ?? companyName}
            maxlength="50"
          />
        </div>

        <div class="mt-4">
          <label for="website">
            <span class="text-l text-center">Company Website</span>
          </label>
          <input
            id="website"
            name="website"
            type="text"
            placeholder="Company website"
            class="{fieldError(form, 'website')
              ? 'border-destructive focus-visible:ring-destructive'
              : ''} mt-1 flex h-9 w-full max-w-xs rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            value={form?.website ?? website}
            maxlength="50"
          />
        </div>

        {#if form?.errorMessage}
          <p class="text-red-700 text-sm font-bold text-center mt-3">
            {form?.errorMessage}
          </p>
        {/if}
        <div class="mt-4">
          <Button type="submit" class="mt-3 min-w-[200px]" disabled={loading}>
            {loading ? "..." : "Create Profile"}
          </Button>
        </div>
      </form>

      <div class="text-sm text-slate-800 mt-14">
        You are logged in as {user?.email}.
        <br />
        <a class="underline" href="/account/sign_out"> Sign out </a>
      </div>
    </div>
  </div>
</div>
