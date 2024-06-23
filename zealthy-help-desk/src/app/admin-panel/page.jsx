import { useState } from 'react'
import { getTickets } from '@/actions/getTickets'
import styles from './styles.module.css'

const Admin = () => {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const fetchTickets = async () => {
            const ticketsData = await getTickets()
            setTickets(ticketsData)
        }

        fetchTickets()
    }, [])

    return (
        <div className={styles.page}>
            <div className={styles.mainContainer}></div>
        </div>
    )
}

export default Admin
