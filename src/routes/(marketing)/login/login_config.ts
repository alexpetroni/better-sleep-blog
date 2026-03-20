import { ThemeSupa } from "@supabase/auth-ui-shared"
import type { Provider } from "@supabase/supabase-js"

export const oauthProviders = ["github"] as Provider[]

// use CSS variables to style Supabase auth template
export const sharedAppearance = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: "hsl(262 100% 13%)",
        brandAccent: "hsl(333 71% 51%)",
        inputText: "hsl(262 100% 13%)",
        brandButtonText: "hsl(40 80% 98%)",
        messageText: "hsl(262 100% 13%)",
        dividerBackground: "hsl(262 100% 13%)",
        inputLabelText: "hsl(262 100% 13%)",
        defaultButtonText: "hsl(262 100% 13%)",
        anchorTextColor: "hsl(262 100% 13%)",
      },
      fontSizes: {
        baseInputSize: "16px",
      },
    },
  },
  className: {
    button: "authBtn",
  },
}
