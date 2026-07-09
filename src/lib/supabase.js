import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// createClient() throws synchronously if url/key are missing. A misconfigured
// env var at deploy time must not be able to crash the whole app - the
// interactive widgets that depend on this should just quietly not render.
export const supabase = url && key ? createClient(url, key) : null;

if (!supabase && import.meta.env.DEV) {
  console.warn("Supabase env vars missing - guestbook, ticker, and hit counter are disabled.");
}
