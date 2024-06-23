import { Mulish } from 'next/font/google'
import PropTypes from 'prop-types'

const mulish = Mulish({ subsets: ['latin'] })

const Heading = ({ className = 'Heading', children }) => {
    return (
        <h2
            className={`
      ${mulish.className}
      ${className}
      `}
        >
            {children}
        </h2>
    )
}

Heading.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}
export default Heading
