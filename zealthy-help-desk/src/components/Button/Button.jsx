import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Button.module.css'
const Button = ({ text, variant = 'primary', isLinked, href, handleClick}) => {
  return isLinked ? (
    <Link href={href}>
      <button
        className={styles[variant]}
        text={text}>
          {text}
      </button>
    </Link>
  ) :
    (
      <button 
        className={styles[variant]} 
        text={text}
        onClick={handleClick}>
          {text}
      </button>
    )
}

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  isLinked: PropTypes.bool,
  href: PropTypes.string,
  handleClick: PropTypes.func
}

export default Button