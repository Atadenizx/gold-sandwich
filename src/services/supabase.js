import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mcmxivlvvwtzilbrxoms.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbXhpdmx2dnd0emlsYnJ4b21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5OTMyMjksImV4cCI6MjAzNjU2OTIyOX0.On72PO839aYVba49jriE-cvQY4nCNl0bOshSphAq9CI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
