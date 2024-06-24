'use client'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Input from '../Input/Input'
import styles from './Form.module.css'
import Button from '../Button/Button'

const Form = ({ formObj, buttonText, handleSubmit }) => {
  const [formData, setFormData] = useState({})

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(formData)
  }

  const formFields = formObj.map((field) => {
    return (
      <Input
        inputVariant={field.inputVariant}
        labelText={field.label}
        placeholder={field.placeholder}
        ticketValue={field.ticketValue}
        inputType={field.inputType}
        onChange={handleInputChange}
        key={field.label}
      ></Input>
    )
  })

  return (
    <div className={styles.helpForm}>
      <form onSubmit={onSubmit}>
        {formFields}
        <Button text={buttonText} isLinked={false}></Button>
      </form>
    </div>
  )
}

Form.PropTypes = {
  formObj: PropTypes.array.isRequired,
  button: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
}

export default Form
