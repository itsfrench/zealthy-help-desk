'use client'
import { getTickets } from '@/actions/getTickets'
import TicketContainer from '@/components/TicketContainer/TicketContainer'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

const Admin = () => {
  const [tickets, setTickets] = useState([])
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const ticketsData = await getTickets()
        setTickets(ticketsData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchTickets()
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <TicketContainer tickets={tickets} />
      </div>
    </div>
  )
}

export default Admin
