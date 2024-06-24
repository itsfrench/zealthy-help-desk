'use client'
import React, { useState } from 'react'
import Form from '@/components/Form/Form'
import styles from './styles.module.css'
import copy from '@/copy/copy'
import Heading from '@/components/Typography/Heading'
import BodyText from '@/components/Typography/BodyText'
import { createNewTicket } from '@/actions/createNewTicket'

const CreateATicket = () => {
  const [formError, setError] = useState(false)
  const [formSubmitted, setSubmitted] = useState(false)

  const handleFormSubmit = async (formData) => {
    try {
      const success = await createNewTicket(formData)
      if (success) {
        console.log('New ticket created:', success)
        setSubmitted(true)
      } else {
        console.error('Failed to create new ticket')
        setError(true)
      }
    } catch (error) {
      console.error('Error creating new ticket:', error)
      setError(true)
    }
  }

  const formContent = copy.createATicket
  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <Heading>{formContent.header}</Heading>
        <BodyText>{formContent.description}</BodyText>
        {formSubmitted ? (
          <BodyText>Form submitted successfully!</BodyText>
        ) : (
          <Form
            formObj={formContent.form}
            buttonText={formContent.buttonText}
            handleSubmit={handleFormSubmit}
            
          />
        )}
        {formError && (
          <BodyText>Error submitting form. Please try again.</BodyText>
        )}
      </div>
    </div>
  )
}

export default CreateATicket
