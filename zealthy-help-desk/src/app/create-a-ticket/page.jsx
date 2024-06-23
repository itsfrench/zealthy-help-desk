'use client'
import Form from '@/components/Form/Form'
import styles from './styles.module.css'
import copy from '@/copy/copy'
import Heading from '@/components/Typography/Heading'
import BodyText from '@/components/Typography/BodyText'
import { useState } from 'react'

const CreateATicket = () => {
    
    const [formError, setError] = useState(false)
    const [formSubmitted, setSubmitted] = useState(false)

    const functionToPass = async (event) => {
        console.log(event.target)
    }

    const formContent = copy.createATicket
    return (
        <div className={styles.page}>
            <div className={styles.mainContainer}>
                <Heading>{formContent.header}</Heading>
                <BodyText>{formContent.description}</BodyText>
                <Form
                    formObj={formContent.form}
                    buttonText={formContent.buttonText}
                    handleSubmit={functionToPass}
                ></Form>
            </div>
        </div>
    )
}

export default CreateATicket
