import PropTypes from 'prop-types'
import { useState } from 'react'
import Ticket from '@/components/Ticket/Ticket'
import copy from '@/copy/copy'
import styles from './TicketContainer.module.css'
import BodyText from '../Typography/BodyText'
import Heading from '../Typography/Heading'
import Form from '../Form/Form'
import Button from '../Button/Button'

const TicketContainer = ({ tickets }) => {
  const [emailPortalStatus, setEmailPortalStatus] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')

  const titles = copy.adminPanel.titles
  const emailForm = copy.emailPortal
  const sendEmail = (e) => {
    console.log('Here is your email: ', {
      to: customerEmail,
      subject: e.subject_line,
      emailBody: e.email_body,
    })
  }

  const allTickets = tickets.map((data) => {
    return (
      <Ticket
        name={data.cust_name}
        email={data.cust_email}
        subject={data.subject_line}
        details={data.issue}
        status={data.status}
        createdOn={data.created_at}
        id={data.id}
        key={data.cust_name}
        setCustomerName={setCustomerName}
        setCustomerEmail={setCustomerEmail}
        setEmailPortalStatus={setEmailPortalStatus}
      />
    )
  })

  return emailPortalStatus ? (
    <div className={styles.emailPortal}>
      <div className={styles.emailTitleContainer}>
        <Heading className={styles.emailTitle}>Send</Heading>
        <Heading className={styles.emailTitleGreen}>{customerName}</Heading>
        <Heading className={styles.emailTitle}>
          an email about their ticket at
        </Heading>
        <Heading className={styles.emailTitleGreen}>
          {customerEmail + '.'}
        </Heading>
      </div>
      <div className={styles.emailForm}>
        <Form
          formObj={emailForm.form}
          buttonText={emailForm.buttonText}
          handleSubmit={sendEmail}
        ></Form>
      </div>
      <Button
        variant={'secondary'}
        isLinked={false}
        text={'Cancel'}
        onClick={() => {
          setEmailPortalStatus(false)
        }}
      ></Button>
    </div>
  ) : (
    <div className={styles.ticketContainer}>
      <div className={styles.titles}>
        {titles.map((title) => {
          return (
            <BodyText className={styles.title} key={title}>
              {title}
            </BodyText>
          )
        })}
      </div>
      {allTickets}
    </div>
  )
}

TicketContainer.propTypes = {
  tickets: PropTypes.array.isRequired,
}
export default TicketContainer
