<script lang="ts">
  import { invalidate } from "$app/navigation"
  import { onMount } from "svelte"

  let { data, children } = $props()

  const supabase = $derived(data.supabase)
  const session = $derived(data.session)

  onMount(() => {
    const { data: authData } = supabase.auth.onAuthStateChange(
      (event, _session) => {
        if (_session?.expires_at !== session?.expires_at) {
          invalidate("supabase:auth")
        }
      },
    )

    return () => authData.subscription.unsubscribe()
  })
</script>

{@render children?.()}
