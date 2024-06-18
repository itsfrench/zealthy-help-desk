import PropTypes from 'prop-types'
import styles from './Input.module.css'
import { Inter } from 'next/font/google'
import BodyText from '../Typography/BodyText'

const inter = Inter({subsets: ['latin']})

const Input = ({ inputVariant = 'primary', inputType, label, labelText, placeholder, value}) => {
  const input = (inputType === 'textarea') ? 
  [<textarea
      className={`
      ${inter.className}
      ${styles[inputVariant]}
      `}
      name={inputVariant}
      value={value} 
      key={labelText}>
      </textarea>] 
      :
      [<input 
        className={`
        ${inter.className}
        ${styles[inputVariant]}
        `}
        type={inputType} 
        name={inputVariant}
        placeholder={placeholder} 
        value={value} 
        key={labelText}
        />]

  return (
    <div className={styles.inputContainer}>
      {(label) && (
        <label className={inter.className} name={inputType}>
          {labelText}
        </label>
      )}
      {input}
    </div>
  )
}

Input.propTypes = {
  inputVariant: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  label: PropTypes.bool.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

export default Input
