<script lang="ts" module>
  import { tv, type VariantProps } from "tailwind-variants"

  export const buttonVariants = tv({
    base: "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  })

  export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"]
  export type ButtonSize = VariantProps<typeof buttonVariants>["size"]
  export type ButtonProps = {
    variant?: ButtonVariant
    size?: ButtonSize
  } & HTMLButtonAttributes

  import type { HTMLButtonAttributes } from "svelte/elements"
</script>

<script lang="ts">
  import { cn } from "$lib/utils.js"

  let {
    class: className,
    variant = "default",
    size = "default",
    children,
    ...restProps
  }: ButtonProps & { children?: import("svelte").Snippet; class?: string } =
    $props()
</script>

<button class={cn(buttonVariants({ variant, size }), className)} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</button>
