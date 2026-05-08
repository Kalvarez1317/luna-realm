import { createClient } from "@supabase/supabase-js";

const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!rawSupabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
}

if (!supabaseKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
}

const supabaseUrl = rawSupabaseUrl
  .replace("/rest/v1/", "")
  .replace("/rest/v1", "")
  .replace(/\/$/, "");

export const supabase = createClient(supabaseUrl, supabaseKey);