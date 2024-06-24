import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SB_API_KEY_SR

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
