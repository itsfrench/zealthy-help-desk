import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './Input.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Input = ({
  inputVariant = 'primary',
  inputType,
  labelText,
  ticketValue,
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    onChange(ticketValue, e.target.value)
  }

  const input =
    inputType === 'textarea'
      ? [
          <textarea
            className={`
            ${inter.className}
            ${styles[inputVariant]}
            `}
            name={ticketValue}
            value={value}
            key={labelText}
            id={ticketValue}
            onChange={handleChange}
            required
          ></textarea>,
        ]
      : [
          <input
            className={`
            ${inter.className}
            ${styles[inputVariant]}
          `}
            type={inputType}
            name={ticketValue}
            placeholder={placeholder}
            value={value}
            key={labelText}
            id={ticketValue}
            onChange={handleChange}
            required
          />,
        ]

  return (
    <div className={styles.inputContainer}>
      <label
        className={inter.className}
        name={ticketValue}
        htmlFor={ticketValue}
      >
        {labelText}
      </label>
      {input}
    </div>
  )
}

Input.propTypes = {
  inputVariant: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  ticketValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Input
