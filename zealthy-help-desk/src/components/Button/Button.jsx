import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Button.module.css'
const Button = ({ text, variant = 'primary', isLinked = true, href }) => {
    return isLinked ? (
        <Link href={href}>
            <button className={styles[variant]} text={text}>
                {text}
            </button>
        </Link>
    ) : (
        <button className={styles[variant]} text={text} type={'submit'}>
            {text}
        </button>
    )
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string,
    isLinked: PropTypes.bool,
    href: PropTypes.string,
}

export default Button
