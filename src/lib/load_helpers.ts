import { isBrowser } from "@supabase/ssr"
import type { Session, SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "../DatabaseDefinitions.js"

export const load_helper = async (
  server_session: Session | null,
  supabase: SupabaseClient<Database>,
) => {
  // on server populated on server by LayoutData, using authGuard hook
  let session = server_session
  if (isBrowser()) {
    // Only call getSession in browser where it's safe.
    const getSessionResponse = await supabase.auth.getSession()
    session = getSessionResponse.data.session
  }
  if (!session) {
    return {
      session: null,
      user: null,
    }
  }

  if (isBrowser()) {
    // In the browser, validate the JWT by calling getUser()
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()
    if (userError || !user) {
      return { session: null, user: null }
    }
    return { session, user }
  }

  // Server path: session was already validated by safeGetSession in hooks
  return {
    session,
    user: session.user,
  }
}
