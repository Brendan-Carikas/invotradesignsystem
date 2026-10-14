-- Fix Supabase advisor: function_search_path_mutable on public.update_updated_at
--
-- Pin the search_path so the trigger function can't be hijacked by objects in
-- another schema. The function only uses NOW(), which lives in pg_catalog
-- (always searched first), so behaviour is unchanged.

ALTER FUNCTION public.update_updated_at() SET search_path = '';
