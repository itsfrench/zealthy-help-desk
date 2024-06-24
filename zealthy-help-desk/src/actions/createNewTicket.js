'use server'
import { supabase } from '@/lib/supabaseClient'

export const createNewTicket = async (formData) => {
  try {
    const { data: newTicket, error } = await supabase.from('tickets').insert({
      cust_name: formData.cust_name,
      cust_email: formData.cust_email,
      issue: formData.issue,
      status: 'new',
      subject_line: formData.subject_line,
      created_at: new Date(),
    })

    if (error) {
      console.error('There was an issue creating the new ticket:', error)
      return { success: false, error }
    }

    return { success: true }
  } catch (error) {
    console.error('Unexpected error creating new ticket:', error)
    return { success: false, error }
  }
}
