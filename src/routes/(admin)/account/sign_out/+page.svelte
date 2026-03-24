<script lang="ts">
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"

  let { data } = $props()

  let message = $state("Se deconectează....")

  // on mount, sign out
  onMount(() => {
    data.supabase.auth.signOut().then(({ error }) => {
      if (error) {
        message = "A apărut o problemă la deconectare."
      } else {
        goto("/")
      }
    })
  })
</script>

<h1 class="text-2xl font-bold m-6 mx-auto my-auto">{message}</h1>
