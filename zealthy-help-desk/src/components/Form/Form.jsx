'use client'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import styles from './Form.module.css'
import Button from '../Button/Button'

const Form = ({ formObj, buttonText, handleSubmit }) => {
    const formFields = formObj.map((field) => {
        return (
            <Input
                inputVariant={field.inputVariant}
                label={true}
                labelText={field.label}
                placeholder={field.placeholder}
                inputType={field.inputType}
                key={field.inputVariant}
            ></Input>
        )
    })

    return (
        <div className={styles.helpForm}>
            <form onSubmit={handleSubmit} key="">
                {formFields}
                <Button text={buttonText}></Button>
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
