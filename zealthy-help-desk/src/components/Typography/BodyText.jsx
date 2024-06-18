import { Inter } from 'next/font/google'
import PropTypes from 'prop-types'

const inter = Inter({subsets: ['latin']})

const BodyText = ({className = 'BodyText', children}) => {
  return (
      <p className={`
      ${inter.className}
      ${className}
      `}>
        {children}
      </p>
  )
}

BodyText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default BodyText