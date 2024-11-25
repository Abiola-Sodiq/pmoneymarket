import { createClient } from "@supabase/supabase-js";
import { Database } from "../database.types";
const supabaseUrl = import.meta.env.VITE_APP_PUBLIC_URL
const supabaseKey = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient<Database>(supabaseUrl as string, supabaseKey as string);

export default supabase;
