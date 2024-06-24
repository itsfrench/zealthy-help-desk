'use server'

import { supabase } from '@/lib/supabaseClient'

export const getTickets = async () => {
  try {
    const { data: tickets, error } = await supabase.from('tickets').select('*')

    if (error) {
      console.error('There was an issue when fetching ticket data: ', error)
      return { success: false, error }
    }

    return tickets
  } catch (error) {
    console.error('Unexpected error fetching tickets:', error)
    return { success: false, error }
  }
}
