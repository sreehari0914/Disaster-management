import { createClient } from "@supabase/supabase-js";

const projectURL = "https://bcrprlmmzkyadmvpqbgy.supabase.co";
const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcnBybG1temt5YWRtdnBxYmd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNTYyOTEsImV4cCI6MjAxMTgzMjI5MX0.Ei_nxm60iCnQdbJJyWN9d_HbvwnqoT-a_VEE6gew8Vk";

export const supabase = createClient(projectURL, projectKey);