'use server'

import { supabase } from '@/lib/supabaseClient'

const getTickets = async () => {
    try {
        const { data, error } = await supabase.from('tickets').select('*')
        if (error) {
            console.error(
                'There was an issue when fetching ticket data: ',
                error
            )
            return []
        }
        return data
    } catch (error) {
        console.error('Unexpected error fetching tickets:', error)
        return []
    }
}

export default getTickets
