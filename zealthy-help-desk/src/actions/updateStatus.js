'use server'
import { supabase } from '@/lib/supabaseClient'

export const updateTicketStatus = async (ticketId, newStatus) => {
  try {
    const { data: updatedTicket, error } = await supabase
      .from('tickets')
      .update({ status: newStatus })
      .eq('id', ticketId)

    if (error) {
      console.error('There was an issue updating the ticket status:', error)
      return { success: false, error }
    }

    return { success: true }
  } catch (error) {
    console.error('Unexpected error updating ticket status:', error)
    return { success: false, error }
  }
}
