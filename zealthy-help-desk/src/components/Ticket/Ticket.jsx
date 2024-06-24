'use client'
import PropTypes from 'prop-types'
import { updateTicketStatus } from '@/actions/updateStatus'
import BodyText from '@/components/Typography/BodyText'
import styles from './Ticket.module.css'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'

const Ticket = ({
  name,
  email,
  subject,
  details,
  status,
  createdOn,
  id,
  setCustomerName,
  setCustomerEmail,
  setEmailPortalStatus,
}) => {
  const displayDate = new Date(createdOn)
  const [selectedStatus, setSelectedStatus] = useState(status)

  const handleClick = () => {
    setCustomerName(name)
    setCustomerEmail(email)
    setEmailPortalStatus(true)
  }
  const handleStatusChange = async (e) => {
    const newStatus = e.target.value
    console.log(e)
    setSelectedStatus(newStatus)
    try {
      await updateTicketStatus(id, newStatus)
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  useEffect(() => {}, [selectedStatus])

  return (
    <div className={styles.ticket}>
      <BodyText className={styles.mainInfo}> {name} </BodyText>
      <BodyText className={styles.mainInfo}> {subject} </BodyText>
      <BodyText className={styles.details}> {details} </BodyText>
      <select
        className={styles.status}
        value={selectedStatus}
        onChange={handleStatusChange}
      >
        <option value="new">New</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <BodyText className={styles.date}> {displayDate.toUTCString()} </BodyText>
      <div className={styles.button}>
        <Button
          isLinked={false}
          text={'Email Customer'}
          email={email}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
  setCustomerName: PropTypes.func.isRequired,
  setCustomerEmail: PropTypes.func.isRequired,
  setEmailPortalStatus: PropTypes.func.isRequired,
}

export default Ticket
