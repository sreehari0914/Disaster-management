import { createClient } from "@supabase/supabase-js";

const projectURL = process.env.SUPABASE_URL   ;
const projectKey = process.env.SUPABASE_KEY ;

export const supabase = createClient(projectURL, projectKey);