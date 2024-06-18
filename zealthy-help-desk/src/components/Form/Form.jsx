import PropTypes from 'prop-types'
import Input from '../Input/Input'
import styles from './Form.module.css'
import Button from '../Button/Button'


const Form = ({ formObj, buttonText, handleClick }) => {

  const formFields = formObj.map((field) => {
    return (
      <Input 
      inputVariant={field.inputVariant} 
      label={true} 
      labelText={field.label} 
      placeholder={field.placeholder} 
      inputType={field.inputType}
      >
      </Input>
    )
  })

  return (
    <div className={styles.helpForm}>
      <form>
        {formFields}
        <Button
        text={buttonText}
        onClick={handleClick}></Button>
      </form>
      
    </div>
  )
}

Form.PropTypes = {
  formObj: PropTypes.array.isRequired,
  button: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}

export default Form