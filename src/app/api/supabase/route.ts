import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(
  supabaseUrl!,
  supabaseKey!,
);

export async function GET( request : Request ) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  const query = (category && category != 'all') ? supabase.from('Photos').select('*').eq('category', category) : supabase.from('Photos').select('*');

  const { data, error } = await query;
  return Response.json({ data, error });
}