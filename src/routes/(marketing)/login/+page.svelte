<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button/index.js"
</script>

<svelte:head>
  <title>Log In</title>
</svelte:head>

<div>
  <h1 class="text-xl font-bold">Get Started</h1>
  <a
    href="/login/sign_up"
    class="{buttonVariants({ variant: 'default' })} mt-3 min-w-[200px]"
    >Sign Up</a
  >

  <h1 class="text-xl mt-6">Already have an account?</h1>
  <a
    href="/login/sign_in"
    class="{buttonVariants({ variant: 'outline' })} mt-3 min-w-[200px]"
    >Sign In</a
  >
</div>
